/*
  Warnings:

  - You are about to drop the column `race` on the `Character` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Character" DROP COLUMN "race";

-- DropEnum
DROP TYPE "Race";
