/*
  Warnings:

  - Added the required column `referenceId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "ballance" REAL DEFAULT 0.0,
    "secure" BOOLEAN DEFAULT false,
    "status" TEXT DEFAULT 'pending',
    "fee" REAL DEFAULT 0.0,
    "referenceId" TEXT NOT NULL,
    CONSTRAINT "User_referenceId_fkey" FOREIGN KEY ("referenceId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_User" ("ballance", "email", "fee", "id", "password", "role", "secure", "status", "username") SELECT "ballance", "email", "fee", "id", "password", "role", "secure", "status", "username" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;