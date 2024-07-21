-- DropForeignKey
ALTER TABLE `Referral` DROP FOREIGN KEY `Referral_referee_email_fkey`;

-- AddForeignKey
ALTER TABLE `Referral` ADD CONSTRAINT `Referral_referrer_email_fkey` FOREIGN KEY (`referrer_email`) REFERENCES `User`(`email`) ON DELETE RESTRICT ON UPDATE CASCADE;
