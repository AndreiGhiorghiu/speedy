-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Database" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "ownerId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" TEXT NOT NULL DEFAULT '{''1'':''pending''}',
    "statisticsId" TEXT,
    CONSTRAINT "Database_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Database_statisticsId_fkey" FOREIGN KEY ("statisticsId") REFERENCES "Statistics" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Database" ("createdAt", "id", "name", "ownerId", "statisticsId", "status", "updatedAt") SELECT "createdAt", "id", "name", "ownerId", "statisticsId", "status", "updatedAt" FROM "Database";
DROP TABLE "Database";
ALTER TABLE "new_Database" RENAME TO "Database";
CREATE UNIQUE INDEX "Database_statisticsId_key" ON "Database"("statisticsId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
