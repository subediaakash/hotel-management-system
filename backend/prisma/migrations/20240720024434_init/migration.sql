-- CreateEnum
CREATE TYPE "GuestType" AS ENUM ('individual', 'platinum', 'longTerm', 'vacation');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('confirmed', 'notVerifired');

-- CreateTable
CREATE TABLE "Guest" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "dateOfBirth" TIMESTAMP(3) NOT NULL,
    "phoneNumber" INTEGER NOT NULL,
    "language" TEXT NOT NULL,
    "work" TEXT NOT NULL,

    CONSTRAINT "Guest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GuestPassport" (
    "id" SERIAL NOT NULL,
    "passportNumber" INTEGER NOT NULL,
    "passportIssueDate" TIMESTAMP(3) NOT NULL,
    "passportExpiryDate" TIMESTAMP(3) NOT NULL,
    "dateOfBirth" TIMESTAMP(3) NOT NULL,
    "placeOfBirth" TEXT NOT NULL,
    "passportCountry" TEXT NOT NULL,
    "passportHolderId" INTEGER NOT NULL,

    CONSTRAINT "GuestPassport_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Booking" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "checkoutDate" TIMESTAMP(3) NOT NULL,
    "destination" TEXT NOT NULL,
    "type" "GuestType" NOT NULL,
    "stayDuration" INTEGER NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'notVerifired',

    CONSTRAINT "Booking_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Guest_email_key" ON "Guest"("email");

-- CreateIndex
CREATE UNIQUE INDEX "GuestPassport_passportHolderId_key" ON "GuestPassport"("passportHolderId");

-- AddForeignKey
ALTER TABLE "GuestPassport" ADD CONSTRAINT "GuestPassport_passportHolderId_fkey" FOREIGN KEY ("passportHolderId") REFERENCES "Guest"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
