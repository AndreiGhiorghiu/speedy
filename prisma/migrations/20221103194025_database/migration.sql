/*
  Warnings:

  - Added the required column `country` to the `Database` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Database` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Database" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "ownerId" TEXT NOT NULL,
    CONSTRAINT "Database_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Database" ("id", "name", "ownerId") SELECT "id", "name", "ownerId" FROM "Database";
DROP TABLE "Database";
ALTER TABLE "new_Database" RENAME TO "Database";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
