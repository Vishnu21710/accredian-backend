/*
  Warnings:

  - You are about to drop the column `referee_id` on the `Referral` table. All the data in the column will be lost.
  - You are about to drop the column `referrer_id` on the `Referral` table. All the data in the column will be lost.
  - You are about to drop the `Referee` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Referrer` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `referee_email` to the `Referral` table without a default value. This is not possible if the table is not empty.
  - Added the required column `referrer_email` to the `Referral` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Referee` DROP FOREIGN KEY `Referee_referrer_id_fkey`;

-- DropForeignKey
ALTER TABLE `Referral` DROP FOREIGN KEY `Referral_referee_id_fkey`;

-- DropForeignKey
ALTER TABLE `Referral` DROP FOREIGN KEY `Referral_referrer_id_fkey`;

-- AlterTable
ALTER TABLE `Referral` DROP COLUMN `referee_id`,
    DROP COLUMN `referrer_id`,
    ADD COLUMN `referee_email` VARCHAR(191) NOT NULL,
    ADD COLUMN `referee_name` VARCHAR(191) NULL,
    ADD COLUMN `referrer_email` VARCHAR(191) NOT NULL,
    ADD COLUMN `referrer_name` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `Referee`;

-- DropTable
DROP TABLE `Referrer`;
