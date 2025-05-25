-- AlterTable
ALTER TABLE "User" ADD COLUMN     "contributionItemId" INTEGER;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_contributionItemId_fkey" FOREIGN KEY ("contributionItemId") REFERENCES "ContributionItem"("id") ON DELETE SET NULL ON UPDATE CASCADE;
