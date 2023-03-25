-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Actions" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "type" TEXT NOT NULL,
    "data" TEXT NOT NULL,
    "userId" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Actions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Actions" ("created_at", "data", "id", "type", "userId") SELECT "created_at", "data", "id", "type", "userId" FROM "Actions";
DROP TABLE "Actions";
ALTER TABLE "new_Actions" RENAME TO "Actions";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
