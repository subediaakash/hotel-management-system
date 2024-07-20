import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { STATUS_CODE } from "../constants";
import { verifyToken } from "../utils/checkToken";

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res
      .status(STATUS_CODE.BAD_REQUEST)
      .json({ message: "Token not found" });
  }
  try {
    const decodedToken = verifyToken(token);
    res.locals.user = decodedToken;
    next();
  } catch (error) {
    return res
      .status(STATUS_CODE.UNAUTHORIZED)
      .json({ err: "Provide a valid token" });
  }
};
