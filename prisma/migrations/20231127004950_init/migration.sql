/*
  Warnings:

  - The primary key for the `Lance` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Lance` table. All the data in the column will be lost.
  - The primary key for the `Leilao` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Leilao` table. All the data in the column will be lost.
  - You are about to drop the column `lista_de_lances` on the `Leilao` table. All the data in the column will be lost.
  - You are about to drop the column `produto` on the `Leilao` table. All the data in the column will be lost.
  - The primary key for the `Usuario` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Usuario` table. All the data in the column will be lost.
  - The required column `idlance` was added to the `Lance` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `idProduto` to the `Leilao` table without a default value. This is not possible if the table is not empty.
  - The required column `idleilao` was added to the `Leilao` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `lanceid` to the `Leilao` table without a default value. This is not possible if the table is not empty.
  - Made the column `nome` on table `Usuario` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Lance" (
    "idlance" TEXT NOT NULL PRIMARY KEY,
    "compradorid" TEXT NOT NULL,
    "leilaoid" TEXT NOT NULL,
    "valor" REAL NOT NULL,
    CONSTRAINT "Lance_compradorid_fkey" FOREIGN KEY ("compradorid") REFERENCES "Usuario" ("nome") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Lance_leilaoid_fkey" FOREIGN KEY ("leilaoid") REFERENCES "Leilao" ("idleilao") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Lance" ("compradorid", "leilaoid", "valor") SELECT "compradorid", "leilaoid", "valor" FROM "Lance";
DROP TABLE "Lance";
ALTER TABLE "new_Lance" RENAME TO "Lance";
CREATE TABLE "new_Leilao" (
    "idleilao" TEXT NOT NULL PRIMARY KEY,
    "idProduto" TEXT NOT NULL,
    "preco" REAL NOT NULL,
    "datalimite" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "donoid" TEXT NOT NULL,
    "lanceid" TEXT NOT NULL,
    CONSTRAINT "Leilao_donoid_fkey" FOREIGN KEY ("donoid") REFERENCES "Usuario" ("nome") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Leilao" ("datalimite", "donoid", "preco") SELECT coalesce("datalimite", CURRENT_TIMESTAMP) AS "datalimite", "donoid", "preco" FROM "Leilao";
DROP TABLE "Leilao";
ALTER TABLE "new_Leilao" RENAME TO "Leilao";
CREATE TABLE "new_Usuario" (
    "nome" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL
);
INSERT INTO "new_Usuario" ("email", "nome") SELECT "email", "nome" FROM "Usuario";
DROP TABLE "Usuario";
ALTER TABLE "new_Usuario" RENAME TO "Usuario";
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
