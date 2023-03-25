/*
  Warnings:

  - You are about to alter the column `price` on the `Database` table. The data in that column could be lost. The data in that column will be cast from `String` to `Float`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Database" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "ownerId" TEXT NOT NULL,
    CONSTRAINT "Database_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Database" ("country", "id", "name", "ownerId", "price") SELECT "country", "id", "name", "ownerId", "price" FROM "Database";
DROP TABLE "Database";
ALTER TABLE "new_Database" RENAME TO "Database";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
