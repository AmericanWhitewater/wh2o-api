/*
  Warnings:

  - You are about to drop the column `name` on the `Reach` table. All the data in the column will be lost.
  - Added the required column `river` to the `Reach` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Reach" DROP COLUMN "name",
ADD COLUMN     "abstract" TEXT,
ADD COLUMN     "altname" TEXT,
ADD COLUMN     "avggradient" INTEGER,
ADD COLUMN     "county" TEXT,
ADD COLUMN     "description" TEXT,
ADD COLUMN     "length" DOUBLE PRECISION,
ADD COLUMN     "maxgradient" INTEGER,
ADD COLUMN     "permitid" INTEGER,
ADD COLUMN     "photoid" INTEGER,
ADD COLUMN     "river" TEXT NOT NULL,
ADD COLUMN     "shuttledetails" TEXT,
ADD COLUMN     "zipcode" TEXT;
