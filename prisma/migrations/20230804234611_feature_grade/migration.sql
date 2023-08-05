/*
  Warnings:

  - Added the required column `character` to the `Feature` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "FeatureCharacter" AS ENUM ('access', 'hazard', 'other', 'playspot', 'portage', 'putin', 'rapid', 'takeout', 'waterfall');

-- AlterTable
ALTER TABLE "Feature" ADD COLUMN     "character" "FeatureCharacter" NOT NULL,
ADD COLUMN     "distance" DOUBLE PRECISION;
