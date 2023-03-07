/*
  Warnings:

  - You are about to drop the column `hair` on the `Pet` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `CatType` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `maxhair` to the `Pet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `minhair` to the `Pet` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Pet` DROP COLUMN `hair`,
    ADD COLUMN `maxhair` VARCHAR(191) NOT NULL,
    ADD COLUMN `minhair` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `CatType_name_key` ON `CatType`(`name`);
