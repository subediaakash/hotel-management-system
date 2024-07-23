-- CreateEnum
CREATE TYPE "GuestType" AS ENUM ('Individual', 'Platinum', 'LongTerm', 'Vacation');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('confirmed', 'notVerified');

-- CreateEnum
CREATE TYPE "Locations" AS ENUM ('Kathmandu', 'UnitedKingdom', 'Melbourne', 'Paris', 'Kolkata', 'Islamabad', 'Moscow', 'Bengaluru', 'Sydney', 'Delhi');

-- CreateTable
CREATE TABLE "Guest" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "dateOfBirth" TIMESTAMP(3) NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "language" TEXT NOT NULL,
    "work" TEXT NOT NULL,

    CONSTRAINT "Guest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Hotel" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "location" "Locations" NOT NULL,

    CONSTRAINT "Hotel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GuestHotel" (
    "id" SERIAL NOT NULL,
    "guestId" INTEGER NOT NULL,
    "hotelId" INTEGER NOT NULL,

    CONSTRAINT "GuestHotel_pkey" PRIMARY KEY ("guestId","hotelId")
);

-- CreateTable
CREATE TABLE "GuestPassport" (
    "id" SERIAL NOT NULL,
    "passportNumber" TEXT NOT NULL,
    "passportIssueDate" TIMESTAMP(3) NOT NULL,
    "passportExpiryDate" TIMESTAMP(3) NOT NULL,
    "dateOfBirth" TIMESTAMP(3) NOT NULL,
    "placeOfBirth" TEXT NOT NULL,
    "passportCountry" TEXT NOT NULL,
    "passportHolderId" INTEGER NOT NULL,

    CONSTRAINT "GuestPassport_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Admin" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Booking" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "checkoutDate" TIMESTAMP(3) NOT NULL,
    "type" "GuestType" NOT NULL,
    "status" "Status" DEFAULT 'notVerified',
    "location" "Locations" NOT NULL,
    "guestId" INTEGER NOT NULL,
    "hotelId" INTEGER NOT NULL DEFAULT 0,
    "cost" INTEGER,

    CONSTRAINT "Booking_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Guest_email_key" ON "Guest"("email");

-- CreateIndex
CREATE UNIQUE INDEX "GuestPassport_passportHolderId_key" ON "GuestPassport"("passportHolderId");

-- CreateIndex
CREATE UNIQUE INDEX "Admin_email_key" ON "Admin"("email");

-- AddForeignKey
ALTER TABLE "GuestHotel" ADD CONSTRAINT "GuestHotel_guestId_fkey" FOREIGN KEY ("guestId") REFERENCES "Guest"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GuestHotel" ADD CONSTRAINT "GuestHotel_hotelId_fkey" FOREIGN KEY ("hotelId") REFERENCES "Hotel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GuestPassport" ADD CONSTRAINT "GuestPassport_passportHolderId_fkey" FOREIGN KEY ("passportHolderId") REFERENCES "Guest"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_guestId_fkey" FOREIGN KEY ("guestId") REFERENCES "Guest"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_hotelId_fkey" FOREIGN KEY ("hotelId") REFERENCES "Hotel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
