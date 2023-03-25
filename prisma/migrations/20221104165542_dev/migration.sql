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
    "cvv2" INTEGER NOT NULL,
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
    CONSTRAINT "Products_sellerId_fkey" FOREIGN KEY ("sellerId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Products_buyerId_fkey" FOREIGN KEY ("buyerId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Products_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Products_databaseId_fkey" FOREIGN KEY ("databaseId") REFERENCES "Database" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Products" ("acc_no", "address", "address2", "buyerId", "cc_num", "city", "country", "cvv2", "databaseId", "dob", "driver_license", "email", "exp_date", "exp_month", "exp_year", "first_name", "full_name", "id", "ip", "last_name", "misc", "mmn", "old_price", "password", "phone", "price", "sellerId", "skip", "sort_code", "ssn", "state", "status", "type", "userId", "vbv", "zip") SELECT "acc_no", "address", "address2", "buyerId", "cc_num", "city", "country", "cvv2", "databaseId", "dob", "driver_license", "email", "exp_date", "exp_month", "exp_year", "first_name", "full_name", "id", "ip", "last_name", "misc", "mmn", "old_price", "password", "phone", "price", "sellerId", "skip", "sort_code", "ssn", "state", "status", "type", "userId", "vbv", "zip" FROM "Products";
DROP TABLE "Products";
ALTER TABLE "new_Products" RENAME TO "Products";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
