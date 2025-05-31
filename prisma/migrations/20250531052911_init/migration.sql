/*
  Warnings:

  - You are about to drop the column `contributionItemId` on the `User` table. All the data in the column will be lost.
  - Added the required column `inviteCode` to the `Group` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_contributionItemId_fkey";

-- AlterTable
ALTER TABLE "Group" ADD COLUMN     "inviteCode" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "contributionItemId";

-- CreateTable
CREATE TABLE "Contributor" (
    "contributionItemId" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,
    "amount" MONEY NOT NULL,

    CONSTRAINT "Contributor_pkey" PRIMARY KEY ("userId","contributionItemId")
);

-- AddForeignKey
ALTER TABLE "Contributor" ADD CONSTRAINT "Contributor_contributionItemId_fkey" FOREIGN KEY ("contributionItemId") REFERENCES "ContributionItem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contributor" ADD CONSTRAINT "Contributor_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
