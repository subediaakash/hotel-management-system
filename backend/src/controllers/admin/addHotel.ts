import { Request, Response } from "express";
import { prisma } from "../../utils/Prisma";
import { STATUS_CODE } from "../../constants";

export const addHotel = async (req: Request, res: Response) => {
  const { name, location } = req.body;
  try {
    const newHotel = await prisma.hotel.create({
      data: {
        name,
        location,
      },
    });

    return res
      .status(STATUS_CODE.ACCEPTED)
      .json({ msg: "Hotel created successfully", hotelDetails: newHotel });
  } catch (error) {
    console.error("Error creating hotel:", error);
    return res.status(STATUS_CODE.INTERNAL_SERVER_ERROR).json({
      msg: "An error occurred while creating the hotel",
    });
  }
};
