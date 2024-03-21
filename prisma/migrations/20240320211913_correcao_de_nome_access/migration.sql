/*
  Warnings:

  - You are about to drop the `acess` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `users` DROP FOREIGN KEY `users_acessId_fkey`;

-- DropTable
DROP TABLE `acess`;

-- CreateTable
CREATE TABLE `Access` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Access_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_acessId_fkey` FOREIGN KEY (`acessId`) REFERENCES `Access`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
