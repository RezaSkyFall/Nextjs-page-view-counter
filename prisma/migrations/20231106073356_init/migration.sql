/*
  Warnings:

  - Added the required column `page_href` to the `PageView` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_PageView" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "page_id" INTEGER,
    "viewed_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ip_request" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "page_href" TEXT NOT NULL
);
INSERT INTO "new_PageView" ("created_at", "id", "ip_request", "page_id", "viewed_at") SELECT "created_at", "id", "ip_request", "page_id", "viewed_at" FROM "PageView";
DROP TABLE "PageView";
ALTER TABLE "new_PageView" RENAME TO "PageView";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
