/*
  Warnings:

  - The primary key for the `Cart` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `cardId` on the `Cart` table. All the data in the column will be lost.
  - Added the required column `cartId` to the `Cart` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Cart` DROP PRIMARY KEY,
    DROP COLUMN `cardId`,
    ADD COLUMN `cartId` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`cartId`);
