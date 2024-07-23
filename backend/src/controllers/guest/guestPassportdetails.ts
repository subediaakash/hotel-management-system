import { Response, Request } from "express";
import { prisma } from "../../utils/Prisma";
import { STATUS_CODE } from "../../constants";

export const guestPassportDetails = async (req: Request, res: Response) => {
  try {
    const guestId = res.locals.user.id;
    const passportDetails = await prisma.guestPassport.findUnique({
      where: {
        passportHolderId: guestId,
      },
    });
    return res.status(STATUS_CODE.ACCEPTED).json({ passportDetails });
  } catch (error) {
    console.error("Error fetching passport details:", error);
    return res.status(STATUS_CODE.INTERNAL_SERVER_ERROR).json({
      message: "An error occurred while retrieving passport details",
    });
  }
};
