import { Request, Response } from "express";
import { prisma } from "../../utils/Prisma";
import { locationSchema } from "../../zod/locationSchema";
import { STATUS_CODE } from "../../constants";

export const newBooking = async (req: Request, res: Response) => {
  const newBooking = req.body;
  const parsedInput = locationSchema.safeParse(newBooking);

  if (!parsedInput.success) {
    return res
      .status(STATUS_CODE.BAD_REQUEST)
      .json({ msg: "zod validation failed", err: parsedInput.error.errors });
  }

  try {
    console.log(res.locals.user.id);

    const newBookingRequest = await prisma.booking.create({
      data: {
        date: new Date(newBooking.date),
        checkoutDate: new Date(newBooking.checkoutDate),
        type: newBooking.type,
        location: newBooking.location,
        guestId: res.locals.user.id,
      },
    });

    return res.status(STATUS_CODE.CREATED).json({
      msg: "Booking created successfully",
      booking: newBookingRequest,
    });
  } catch (error) {
    return res.status(STATUS_CODE.INTERNAL_SERVER_ERROR).json({
      msg: "Error creating booking",
      error: error,
    });
  }
};
