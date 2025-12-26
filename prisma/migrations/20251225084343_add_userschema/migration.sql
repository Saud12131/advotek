/*
  Warnings:

  - A unique constraint covering the columns `[barCouncilId]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('User', 'Lawer');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "barCouncilId" TEXT,
ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'User';

-- CreateIndex
CREATE UNIQUE INDEX "User_barCouncilId_key" ON "User"("barCouncilId");
