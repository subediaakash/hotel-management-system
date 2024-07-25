import { Router } from "express";
import { GuestSignup } from "../controllers/auth/guest/guestSignup";
import { authMiddleware } from "../middlewares/jwt.auth";
import { guestVerification } from "../middlewares/guest.role";
import { guestPassportSetup } from "../controllers/guest/guestPassportSetup";
import { newBooking } from "../controllers/guest/guestNewBooking";
import { guestSignin } from "../controllers/auth/guest/guestSignin";
import { getDeals } from "../controllers/guest/getDeals";
import { getHotelByLocation } from "../controllers/guest/getHotelByLocation";
import { getDealByid } from "../controllers/guest/getDealByid";
import { acceptDeal } from "../controllers/guest/acceptDeal";
import { guestInfo } from "../controllers/guest/guestInfo";
import { guestPassportDetails } from "../controllers/guest/guestPassportdetails";
import bookingHistory from "../controllers/guest/showBookings";
export const guestRouter = Router();

guestRouter.post("/signup", GuestSignup);
guestRouter.post("/signin", guestSignin);
guestRouter.post("/passportDetails", authMiddleware, guestPassportSetup);
guestRouter.post("/newbooking", authMiddleware, newBooking);
guestRouter.post("/getdeal/:dealId", authMiddleware, acceptDeal);

guestRouter.get("/deals", authMiddleware, getDeals);
guestRouter.get("/hotels", authMiddleware, getHotelByLocation);
guestRouter.get("/deals/:dealId", authMiddleware, getDealByid);
guestRouter.get("/info", authMiddleware, guestInfo);
guestRouter.get("/passport", authMiddleware, guestPassportDetails);
guestRouter.get("/bookings", authMiddleware, bookingHistory);
