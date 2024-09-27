import { Request as ExpressRequest, Response } from "express";
import { prisma } from "../../utils/Prisma";
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

interface RequestWithFile extends ExpressRequest {
  file?: Express.Multer.File;
}

export const addHotel = async (req: RequestWithFile, res: Response) => {
  const { name, location, features } = req.body;
  const parsedFeatures = JSON.parse(features);
  if (!req.file) {
    return res.status(400).json({ msg: "Hotel image is required" });
  }

  try {
    const cloudinaryUpload = await new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        { folder: "hotel_images" },
        (error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve(result);
          }
        }
      );
      fs.createReadStream(req.file!.path).pipe(uploadStream);
    });

    const hotelImageUrl = (cloudinaryUpload as any).secure_url;

    fs.unlink(req.file.path, (err) => {
      if (err) {
        console.error("Error deleting file:", err);
      } else {
        console.log(`Successfully deleted file: ${req.file!.path}`);
      }
    });

    const newHotel = await prisma.hotel.create({
      data: {
        name,
        location,
        features: parsedFeatures,
        hotelImage: hotelImageUrl,
      },
    });

    return res
      .status(202)
      .json({ msg: "Hotel created successfully", hotelDetails: newHotel });
  } catch (error) {
    console.error("Error creating hotel:", error);
    return res.status(500).json({
      msg: "An error occurred while creating the hotel",
    });
  }
};
