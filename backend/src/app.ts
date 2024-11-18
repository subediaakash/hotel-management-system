import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import express from "express";
import { guestRouter } from "./routes/guests.route";
import { adminRouter } from "./routes/admin.route";
import { v2 as cloudinary } from "cloudinary";
import multer from "multer";
import upload from "./utils/multer-config";

const app = express();
const port = 5000;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.use(express.json());

app.use(cors());
app.use("/api/guest", guestRouter);
app.use("/api/admin", adminRouter);

app.post("/temp", upload.single("hotelImage"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const uploadStream = cloudinary.uploader.upload_stream(
      { resource_type: "auto" },
      (error, result) => {
        if (error) {
          return res.status(500).json({ error: error.message });
        }
        const hotelImageUrl = result?.secure_url;

        return res.status(200).json({ url: hotelImageUrl });
      }
    );

    uploadStream.end(req.file.buffer);
  } catch (error) {
    return res.status(500).json({ error: (error as Error).message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
