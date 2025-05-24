/*
  Warnings:

  - You are about to drop the column `contributionTypeId` on the `ContributionItem` table. All the data in the column will be lost.
  - You are about to drop the `ContributionType` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `ownerId` to the `Contribution` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ContributionItem" DROP CONSTRAINT "ContributionItem_contributionTypeId_fkey";

-- AlterTable
ALTER TABLE "Contribution" ADD COLUMN     "ownerId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "ContributionItem" DROP COLUMN "contributionTypeId";

-- DropTable
DROP TABLE "ContributionType";

-- AddForeignKey
ALTER TABLE "Contribution" ADD CONSTRAINT "Contribution_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
