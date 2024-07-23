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

  const guestId = res.locals.user.id;
  const hotelId = newBooking.hotelId;

  try {
    console.log(guestId);

    const guestExists = await prisma.guest.findUnique({
      where: { id: guestId },
    });

    console.log(guestExists);

    if (!guestExists) {
      return res.status(STATUS_CODE.NOT_FOUND).json({
        msg: "Guest not found",
      });
    }

    // Check if the hotel exists
    const hotelExists = await prisma.hotel.findUnique({
      where: { id: hotelId },
    });

    if (!hotelExists) {
      return res.status(STATUS_CODE.NOT_FOUND).json({
        msg: "Hotel not found",
      });
    }

    // Create the booking
    const newBookingRequest = await prisma.booking.create({
      data: {
        date: new Date(newBooking.date),
        checkoutDate: new Date(newBooking.checkoutDate),
        type: newBooking.type,
        location: newBooking.location,
        guestId: guestId,
        hotelId: hotelId,
      },
    });

    // Create the guest-hotel relation
    const newGuestHotelRelation = await prisma.guestHotel.create({
      data: {
        guestId: guestId,
        hotelId: hotelId,
      },
    });

    return res.status(STATUS_CODE.CREATED).json({
      msg: "Booking created successfully",
      booking: newBookingRequest,
      guestHotelRelation: newGuestHotelRelation,
    });
  } catch (error) {
    console.error("Error creating booking:", error);
    return res.status(STATUS_CODE.INTERNAL_SERVER_ERROR).json({
      msg: "Error creating booking",
      error: error,
    });
  }
};
