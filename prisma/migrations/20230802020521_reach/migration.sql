/*
  Warnings:

  - Added the required column `reachId` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "reachId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_reachId_fkey" FOREIGN KEY ("reachId") REFERENCES "Reach"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
