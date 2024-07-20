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
    "passportIssueDate" INTEGER NOT NULL,
    "passportExpiryDate" INTEGER NOT NULL,
    "DateOfBirth" TIMESTAMP(3) NOT NULL,
    "placeOfBirth" TEXT NOT NULL,
    "passportCountry" TEXT NOT NULL,
    "passportHolderId" INTEGER NOT NULL,

    CONSTRAINT "GuestPassport_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Guest_email_key" ON "Guest"("email");

-- AddForeignKey
ALTER TABLE "GuestPassport" ADD CONSTRAINT "GuestPassport_passportHolderId_fkey" FOREIGN KEY ("passportHolderId") REFERENCES "Guest"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
