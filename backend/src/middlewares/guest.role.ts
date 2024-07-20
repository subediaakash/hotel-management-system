import { verifyToken } from "../utils/checkToken";

import { Request, Response, NextFunction } from "express";
import { STATUS_CODE } from "../constants";
import { prisma } from "../utils/Prisma";

export const guestVerification = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const email = res.locals.user.email;
  const guestExists = await prisma.guest.findUnique({
    where: {
      email,
    },
  });
  if (guestExists) {
    next();
  }
  return res.status(STATUS_CODE.UNAUTHORIZED).json({ msg: "UnAuthorised" });
};
