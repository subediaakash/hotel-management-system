import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import express from "express";
import { guestRouter } from "./routes/guests.route";
import { adminRouter } from "./routes/admin.route";

const app = express();
const port = 5000;
app.use(cors());
app.use(express.json());

app.use("/api/guest", guestRouter);
app.use("/api/admin", adminRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
