-- AlterTable
ALTER TABLE `users` ADD COLUMN `acessId` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `Acess` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_acessId_fkey` FOREIGN KEY (`acessId`) REFERENCES `Acess`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
