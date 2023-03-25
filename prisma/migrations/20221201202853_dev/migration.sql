/*
  Warnings:

  - You are about to alter the column `createdAt` on the `Tickets` table. The data in that column could be lost. The data in that column will be cast from `String` to `DateTime`.

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
    "referenceId" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "User_referenceId_fkey" FOREIGN KEY ("referenceId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_User" ("ballance", "email", "fee", "id", "password", "referenceId", "role", "secure", "status", "username") SELECT "ballance", "email", "fee", "id", "password", "referenceId", "role", "secure", "status", "username" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");
CREATE TABLE "new_Invoice" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "code" TEXT NOT NULL,
    "total" REAL NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "userId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Invoice_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Invoice" ("code", "createdAt", "id", "status", "total", "userId") SELECT "code", "createdAt", "id", "status", "total", "userId" FROM "Invoice";
DROP TABLE "Invoice";
ALTER TABLE "new_Invoice" RENAME TO "Invoice";
CREATE TABLE "new_Settings" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "importerPresets" TEXT NOT NULL DEFAULT '[]',
    "theme" TEXT NOT NULL DEFAULT 'dark',
    "canNotify" BOOLEAN NOT NULL DEFAULT true,
    "canAlert" BOOLEAN NOT NULL DEFAULT true,
    "alerts" TEXT NOT NULL DEFAULT '[]',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Settings_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Settings" ("alerts", "canAlert", "canNotify", "id", "importerPresets", "theme", "userId") SELECT "alerts", "canAlert", "canNotify", "id", "importerPresets", "theme", "userId" FROM "Settings";
DROP TABLE "Settings";
ALTER TABLE "new_Settings" RENAME TO "Settings";
CREATE UNIQUE INDEX "Settings_userId_key" ON "Settings"("userId");
CREATE TABLE "new_Database" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "ownerId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" TEXT NOT NULL DEFAULT 'pending',
    CONSTRAINT "Database_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Database" ("id", "name", "ownerId") SELECT "id", "name", "ownerId" FROM "Database";
DROP TABLE "Database";
ALTER TABLE "new_Database" RENAME TO "Database";
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
    "userId" TEXT,
    "databaseId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Products_sellerId_fkey" FOREIGN KEY ("sellerId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Products_buyerId_fkey" FOREIGN KEY ("buyerId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Products_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Products_databaseId_fkey" FOREIGN KEY ("databaseId") REFERENCES "Database" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Products" ("acc_no", "address", "address2", "buyerId", "cc_num", "city", "country", "cvv2", "databaseId", "dob", "driver_license", "email", "exp_date", "exp_month", "exp_year", "first_name", "full_name", "id", "ip", "last_name", "misc", "mmn", "old_price", "password", "phone", "price", "sellerId", "skip", "sort_code", "ssn", "state", "status", "type", "userId", "vbv", "zip") SELECT "acc_no", "address", "address2", "buyerId", "cc_num", "city", "country", "cvv2", "databaseId", "dob", "driver_license", "email", "exp_date", "exp_month", "exp_year", "first_name", "full_name", "id", "ip", "last_name", "misc", "mmn", "old_price", "password", "phone", "price", "sellerId", "skip", "sort_code", "ssn", "state", "status", "type", "userId", "vbv", "zip" FROM "Products";
DROP TABLE "Products";
ALTER TABLE "new_Products" RENAME TO "Products";
CREATE TABLE "new_Site" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "ballance" REAL NOT NULL,
    "data" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Site" ("ballance", "data", "id") SELECT "ballance", "data", "id" FROM "Site";
DROP TABLE "Site";
ALTER TABLE "new_Site" RENAME TO "Site";
CREATE TABLE "new_Tickets" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "reporterId" TEXT NOT NULL,
    "ticketsId" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Tickets_reporterId_fkey" FOREIGN KEY ("reporterId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Tickets_ticketsId_fkey" FOREIGN KEY ("ticketsId") REFERENCES "Tickets" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Tickets" ("category", "createdAt", "id", "message", "reporterId", "status", "ticketsId", "title") SELECT "category", "createdAt", "id", "message", "reporterId", "status", "ticketsId", "title" FROM "Tickets";
DROP TABLE "Tickets";
ALTER TABLE "new_Tickets" RENAME TO "Tickets";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
