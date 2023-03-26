-- CreateTable
CREATE TABLE "Data" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "projectID" TEXT NOT NULL,
    "data" TEXT NOT NULL DEFAULT '[]',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "Data_projectID_key" ON "Data"("projectID");
