import { Router } from "express";
import { GuestSignup } from "../controllers/auth/guest/guestSignup";
export const guestRouter = Router();

guestRouter.post("/signup", GuestSignup);
