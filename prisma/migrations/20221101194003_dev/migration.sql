/*
  Warnings:

  - You are about to drop the column `data` on the `Settings` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Settings" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "importerPresets" TEXT NOT NULL DEFAULT '[]',
    "theme" TEXT NOT NULL DEFAULT 'dark',
    "canNotify" BOOLEAN NOT NULL DEFAULT true,
    "canAlert" BOOLEAN NOT NULL DEFAULT true,
    "alerts" TEXT NOT NULL DEFAULT '[]',
    CONSTRAINT "Settings_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Settings" ("id", "userId") SELECT "id", "userId" FROM "Settings";
DROP TABLE "Settings";
ALTER TABLE "new_Settings" RENAME TO "Settings";
CREATE UNIQUE INDEX "Settings_userId_key" ON "Settings"("userId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
