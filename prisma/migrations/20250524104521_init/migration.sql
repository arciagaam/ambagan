/*
  Warnings:

  - You are about to drop the column `assignedAt` on the `UsersOnGroups` table. All the data in the column will be lost.
  - Added the required column `role` to the `UsersOnGroups` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "UsersOnGroups" DROP COLUMN "assignedAt",
ADD COLUMN     "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "role" TEXT NOT NULL;
