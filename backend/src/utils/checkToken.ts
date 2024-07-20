import jwt from "jsonwebtoken";

export const verifyToken = async (token: string) => {
  try {
    const verifiedToken = jwt.verify(token, process.env.JWT_SECRET!);
    console.log(verifiedToken);

    return verifiedToken;
  } catch (error) {
    throw new Error("Invalid Token");
  }
};
