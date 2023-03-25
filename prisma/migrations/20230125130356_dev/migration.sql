-- CreateTable
CREATE TABLE "Actions" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "type" TEXT NOT NULL,
    "data" TEXT NOT NULL,
    "userId" TEXT,
    "created_at" DATETIME NOT NULL,
    CONSTRAINT "Actions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
