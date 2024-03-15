/*
  Warnings:

  - You are about to drop the column `date` on the `ShiftSchedules` table. All the data in the column will be lost.
  - Added the required column `dateID` to the `ShiftSchedules` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ShiftSchedules" DROP COLUMN "date",
ADD COLUMN     "dateID" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Dates" (
    "id" SERIAL NOT NULL,
    "date" DATE NOT NULL,

    CONSTRAINT "Dates_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ShiftSchedules" ADD CONSTRAINT "ShiftSchedules_dateID_fkey" FOREIGN KEY ("dateID") REFERENCES "Dates"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
