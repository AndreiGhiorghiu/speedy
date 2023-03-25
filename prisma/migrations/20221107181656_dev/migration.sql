/*
  Warnings:

  - You are about to drop the column `responderId` on the `Tickets` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Tickets" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "createdAt" TEXT NOT NULL,
    "reporterId" TEXT NOT NULL,
    "ticketsId" TEXT,
    CONSTRAINT "Tickets_reporterId_fkey" FOREIGN KEY ("reporterId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Tickets_ticketsId_fkey" FOREIGN KEY ("ticketsId") REFERENCES "Tickets" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Tickets" ("category", "createdAt", "id", "message", "reporterId", "status", "ticketsId", "title") SELECT "category", "createdAt", "id", "message", "reporterId", "status", "ticketsId", "title" FROM "Tickets";
DROP TABLE "Tickets";
ALTER TABLE "new_Tickets" RENAME TO "Tickets";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
