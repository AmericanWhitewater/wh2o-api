-- CreateTable
CREATE TABLE "Gage" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "reachId" INTEGER NOT NULL,

    CONSTRAINT "Gage_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Gage" ADD CONSTRAINT "Gage_reachId_fkey" FOREIGN KEY ("reachId") REFERENCES "Reach"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
