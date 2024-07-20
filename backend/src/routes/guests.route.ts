import { Router } from "express";
import { GuestSignup } from "../controllers/auth/guest/guestSignup";
import { authMiddleware } from "../middlewares/jwt.auth";
import { guestVerification } from "../middlewares/guest.role";
import { guestPassportSetup } from "../controllers/guest/guestPassportSetup";
export const guestRouter = Router();

guestRouter.post("/signup", GuestSignup);
guestRouter.post("/passportDetails", authMiddleware, guestPassportSetup);
