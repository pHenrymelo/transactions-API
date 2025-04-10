-- CreateTable
CREATE TABLE "transactions" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "amount" DECIMAL(10,2) NOT NULL,
    "sessionId" TEXT,

    CONSTRAINT "transactions_pkey" PRIMARY KEY ("id")
);
