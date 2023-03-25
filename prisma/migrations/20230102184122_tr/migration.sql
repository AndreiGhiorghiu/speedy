-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_BTC_Addresses" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "received_btc" REAL NOT NULL DEFAULT 0,
    "received_usd" REAL NOT NULL DEFAULT 0,
    "transactions" INTEGER NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "BTC_Addresses_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_BTC_Addresses" ("address", "createdAt", "id", "received_btc", "received_usd", "status", "updatedAt", "userId") SELECT "address", "createdAt", "id", "received_btc", "received_usd", "status", "updatedAt", "userId" FROM "BTC_Addresses";
DROP TABLE "BTC_Addresses";
ALTER TABLE "new_BTC_Addresses" RENAME TO "BTC_Addresses";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
