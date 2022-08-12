/*
  Warnings:

  - Added the required column `race` to the `Character` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Race" AS ENUM ('HUMAN', 'ELF', 'ORK', 'DWARF');

-- AlterTable
ALTER TABLE "Character" ADD COLUMN     "race" "Race" NOT NULL;
