-- CreateTable
CREATE TABLE "Statistics" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "databaseId" TEXT,
    "data" TEXT NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Products" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "sellerId" TEXT NOT NULL,
    "buyerId" TEXT,
    "status" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "old_price" REAL,
    "cc_num" TEXT NOT NULL,
    "cvv2" TEXT NOT NULL,
    "skip" TEXT,
    "full_name" TEXT,
    "first_name" TEXT,
    "last_name" TEXT,
    "sort_code" TEXT,
    "misc" TEXT,
    "exp_date" TEXT,
    "exp_month" INTEGER,
    "exp_year" INTEGER,
    "zip" TEXT,
    "address" TEXT,
    "address2" TEXT,
    "city" TEXT,
    "country" TEXT,
    "ip" TEXT,
    "type" TEXT,
    "state" TEXT,
    "phone" TEXT,
    "dob" TEXT,
    "ssn" TEXT,
    "email" TEXT,
    "password" TEXT,
    "mmn" TEXT,
    "vbv" TEXT,
    "acc_no" TEXT,
    "driver_license" TEXT,
    "dbVersion" INTEGER NOT NULL DEFAULT 1,
    "userId" TEXT,
    "databaseId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Products_sellerId_fkey" FOREIGN KEY ("sellerId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Products_buyerId_fkey" FOREIGN KEY ("buyerId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Products_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Products_databaseId_fkey" FOREIGN KEY ("databaseId") REFERENCES "Database" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Products" ("acc_no", "address", "address2", "buyerId", "cc_num", "city", "country", "createdAt", "cvv2", "databaseId", "dob", "driver_license", "email", "exp_date", "exp_month", "exp_year", "first_name", "full_name", "id", "ip", "last_name", "misc", "mmn", "old_price", "password", "phone", "price", "sellerId", "skip", "sort_code", "ssn", "state", "status", "type", "updatedAt", "userId", "vbv", "zip") SELECT "acc_no", "address", "address2", "buyerId", "cc_num", "city", "country", "createdAt", "cvv2", "databaseId", "dob", "driver_license", "email", "exp_date", "exp_month", "exp_year", "first_name", "full_name", "id", "ip", "last_name", "misc", "mmn", "old_price", "password", "phone", "price", "sellerId", "skip", "sort_code", "ssn", "state", "status", "type", "updatedAt", "userId", "vbv", "zip" FROM "Products";
DROP TABLE "Products";
ALTER TABLE "new_Products" RENAME TO "Products";
CREATE TABLE "new_Database" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "ownerId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "statisticsId" TEXT,
    CONSTRAINT "Database_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Database_statisticsId_fkey" FOREIGN KEY ("statisticsId") REFERENCES "Statistics" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Database" ("createdAt", "id", "name", "ownerId", "status", "updatedAt") SELECT "createdAt", "id", "name", "ownerId", "status", "updatedAt" FROM "Database";
DROP TABLE "Database";
ALTER TABLE "new_Database" RENAME TO "Database";
CREATE UNIQUE INDEX "Database_statisticsId_key" ON "Database"("statisticsId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
