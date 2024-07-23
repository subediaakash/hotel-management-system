import { Router } from "express";
import { GuestSignup } from "../controllers/auth/guest/guestSignup";
import { authMiddleware } from "../middlewares/jwt.auth";
import { guestVerification } from "../middlewares/guest.role";
import { guestPassportSetup } from "../controllers/guest/guestPassportSetup";
import { newBooking } from "../controllers/guest/guestNewBooking";
import { guestSignin } from "../controllers/auth/guest/guestSignin";
export const guestRouter = Router();

guestRouter.post("/signup", GuestSignup);
guestRouter.post("/signin", guestSignin);

guestRouter.post("/passportDetails", authMiddleware, guestPassportSetup);
guestRouter.post("/newbooking", authMiddleware, newBooking);
