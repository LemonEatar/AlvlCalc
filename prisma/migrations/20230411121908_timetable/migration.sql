-- CreateTable
CREATE TABLE "TimeTable" (
    "id" SERIAL NOT NULL,
    "Monday" TEXT NOT NULL,
    "Tuesday" TEXT NOT NULL,
    "Wendsday" TEXT NOT NULL,
    "Thursday" TEXT NOT NULL,
    "Friday" TEXT NOT NULL,

    CONSTRAINT "TimeTable_pkey" PRIMARY KEY ("id")
);
