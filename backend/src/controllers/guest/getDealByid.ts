import { Request, Response } from "express";
import { prisma } from "../../utils/Prisma";
import { STATUS_CODE } from "../../constants";

export const getDealByid = async (req: Request, res: Response) => {
  const dealId = parseInt(req.params.dealId, 10);

  try {
    const findDeal = await prisma.newDeal.findUnique({
      where: {
        id: dealId,
      },
    });

    if (!findDeal) {
      return res
        .status(STATUS_CODE.NOT_FOUND)
        .json({ error: "Deal not found" });
    }

    return res.status(STATUS_CODE.FOUND).json({ data: findDeal });
  } catch (error) {
    console.error("Error fetching deal:", error);
    return res
      .status(STATUS_CODE.INTERNAL_SERVER_ERROR)
      .json({ error: "Internal server error" });
  }
};
