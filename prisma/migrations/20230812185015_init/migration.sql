/*
  Warnings:

  - You are about to alter the column `geom` on the `Reach` table. The data in that column could be lost. The data in that column will be cast from `Text` to `Unsupported("geometry")`.

*/
-- AlterTable
ALTER TABLE "Reach" ALTER COLUMN "geom" DROP NOT NULL,
ALTER COLUMN "geom" SET DATA TYPE geometry;
