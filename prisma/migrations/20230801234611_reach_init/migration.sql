-- CreateTable
CREATE TABLE "Reach" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "section" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "grade" TEXT NOT NULL,

    CONSTRAINT "Reach_pkey" PRIMARY KEY ("id")
);