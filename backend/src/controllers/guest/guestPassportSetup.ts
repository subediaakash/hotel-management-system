import { Response, Request } from "express";
import { prisma } from "../../utils/Prisma";
import { passportSchema } from "../../zod/guestPassportSchema";
import { STATUS_CODE } from "../../constants";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

export const guestPassportSetup = async (req: Request, res: Response) => {
  const passportDetails = req.body;

  const parsedInput = passportSchema.safeParse(passportDetails);
  if (!parsedInput.success) {
    return res.status(STATUS_CODE.UNPROCESSABLE_ENTITY).json({
      error: "Validation failed",
    });
  }

  try {
    const passportHolderId = res.locals.user.id;

    const createdPassport = await prisma.guestPassport.create({
      data: {
        passportNumber: req.body.passportNumber,
        passportIssueDate: new Date(req.body.passportIssueDate),
        passportExpiryDate: new Date(req.body.passportExpiryDate),
        dateOfBirth: new Date(req.body.dateOfBirth),
        placeOfBirth: req.body.placeOfBirth,
        passportCountry: req.body.passportCountry,
        passportHolderId: passportHolderId,
      },
    });
    console.log("Control reached here");

    return res.status(STATUS_CODE.CREATED).json({
      details: createdPassport,
    });
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError) {
      console.error("Prisma error:", error);
      return res.status(STATUS_CODE.INTERNAL_SERVER_ERROR).json({
        error: "An error occurred while creating the passport",
      });
    } else {
      console.error("Unexpected error:", error);
      return res.status(STATUS_CODE.INTERNAL_SERVER_ERROR).json({
        error: "An unexpected error occurred",
      });
    }
  }
};
