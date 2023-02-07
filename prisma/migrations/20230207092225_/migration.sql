-- CreateTable
CREATE TABLE `workspace` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `materials` VARCHAR(191) NOT NULL,
    `anchor` VARCHAR(191) NOT NULL,
    `screenOrientation` INTEGER NOT NULL,
    `getGameType` INTEGER NOT NULL,
    `creationType` INTEGER NOT NULL,
    `content` VARCHAR(191) NOT NULL,
    `uid` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
