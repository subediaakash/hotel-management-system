import { Request, Response } from "express";
import { prisma } from "../../utils/Prisma";
import { STATUS_CODE } from "../../constants";

export const guestInfo = async (req: Request, res: Response) => {
  try {
    const guestId = res.locals.user.id;
    const guestById = await prisma.guest.findUnique({
      where: {
        id: guestId,
      },
      select: {
        name: true,
        email: true,
        dateOfBirth: true,
        phoneNumber: true,
        language: true,
        work: true,
      },
    });

    if (!guestById) {
      return res
        .status(STATUS_CODE.NOT_FOUND)
        .json({ message: "Guest not found" });
    }

    return res.status(STATUS_CODE.ACCEPTED).json({ guestById });
  } catch (error) {
    console.error("Error fetching guest information:", error);
    return res
      .status(STATUS_CODE.INTERNAL_SERVER_ERROR)
      .json({ message: "An error occurred" });
  }
};
