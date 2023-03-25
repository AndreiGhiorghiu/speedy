/*
  Warnings:

  - Added the required column `databaseId` to the `Products` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "Database" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "ownerId" TEXT NOT NULL,
    CONSTRAINT "Database_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Products" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "sellerId" TEXT NOT NULL,
    "buyerId" TEXT,
    "status" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "old_price" REAL NOT NULL,
    "skip" TEXT NOT NULL,
    "cc_num" TEXT NOT NULL,
    "cvv2" INTEGER NOT NULL,
    "full_name" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "sort_code" TEXT NOT NULL,
    "misc" TEXT NOT NULL,
    "exp_date" TEXT NOT NULL,
    "exp_month" INTEGER NOT NULL,
    "exp_year" INTEGER NOT NULL,
    "zip" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "address2" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "ip" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "dob" TEXT NOT NULL,
    "ssn" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "mmn" TEXT NOT NULL,
    "vbv" TEXT NOT NULL,
    "acc_no" TEXT NOT NULL,
    "driver_license" TEXT NOT NULL,
    "userId" TEXT,
    "databaseId" TEXT NOT NULL,
    CONSTRAINT "Products_sellerId_fkey" FOREIGN KEY ("sellerId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Products_buyerId_fkey" FOREIGN KEY ("buyerId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Products_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Products_databaseId_fkey" FOREIGN KEY ("databaseId") REFERENCES "Database" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Products" ("acc_no", "address", "address2", "buyerId", "cc_num", "city", "country", "cvv2", "dob", "driver_license", "email", "exp_date", "exp_month", "exp_year", "first_name", "full_name", "id", "ip", "last_name", "misc", "mmn", "old_price", "password", "phone", "price", "sellerId", "skip", "sort_code", "ssn", "state", "status", "type", "userId", "vbv", "zip") SELECT "acc_no", "address", "address2", "buyerId", "cc_num", "city", "country", "cvv2", "dob", "driver_license", "email", "exp_date", "exp_month", "exp_year", "first_name", "full_name", "id", "ip", "last_name", "misc", "mmn", "old_price", "password", "phone", "price", "sellerId", "skip", "sort_code", "ssn", "state", "status", "type", "userId", "vbv", "zip" FROM "Products";
DROP TABLE "Products";
ALTER TABLE "new_Products" RENAME TO "Products";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
