-- DropIndex
DROP INDEX `Referral_referee_email_fkey` ON `Referral`;

-- AlterTable
ALTER TABLE `User` ADD COLUMN `code` VARCHAR(191) NULL;
