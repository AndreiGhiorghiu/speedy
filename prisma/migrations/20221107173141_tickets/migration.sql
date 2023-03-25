-- CreateTable
CREATE TABLE "Tickets" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "createdAt" TEXT NOT NULL,
    "reporterId" TEXT NOT NULL,
    "responderId" TEXT NOT NULL,
    "ticketsId" TEXT NOT NULL,
    CONSTRAINT "Tickets_reporterId_fkey" FOREIGN KEY ("reporterId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Tickets_responderId_fkey" FOREIGN KEY ("responderId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Tickets_ticketsId_fkey" FOREIGN KEY ("ticketsId") REFERENCES "Tickets" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
