-- CreateTable
CREATE TABLE "PageView" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "page_id" INTEGER NOT NULL,
    "viewed_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ip_request" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
