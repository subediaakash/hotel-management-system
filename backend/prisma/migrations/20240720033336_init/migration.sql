/*
  Warnings:

  - The values [individual,platinum,longTerm,vacation] on the enum `GuestType` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `stayDuration` on the `Booking` table. All the data in the column will be lost.
  - Added the required column `guestId` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `location` to the `Booking` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Locations" AS ENUM ('Kathmandu', 'UnitedKingdom', 'Melbourne', 'Paris', 'Kolkata', 'Islamabad', 'Moscow', 'Bengaluru', 'Sydney', 'Delhi');

-- AlterEnum
BEGIN;
CREATE TYPE "GuestType_new" AS ENUM ('Individual', 'Platinum', 'LongTerm', 'Vacation');
ALTER TABLE "Booking" ALTER COLUMN "type" TYPE "GuestType_new" USING ("type"::text::"GuestType_new");
ALTER TYPE "GuestType" RENAME TO "GuestType_old";
ALTER TYPE "GuestType_new" RENAME TO "GuestType";
DROP TYPE "GuestType_old";
COMMIT;

-- AlterTable
ALTER TABLE "Booking" DROP COLUMN "stayDuration",
ADD COLUMN     "guestId" INTEGER NOT NULL,
ADD COLUMN     "location" "Locations" NOT NULL;

-- CreateTable
CREATE TABLE "Admin" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Admin_email_key" ON "Admin"("email");

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_guestId_fkey" FOREIGN KEY ("guestId") REFERENCES "Guest"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
