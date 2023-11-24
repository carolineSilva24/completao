-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Leilao" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "produto" TEXT NOT NULL,
    "preco" REAL NOT NULL,
    "datalimite" DATETIME,
    "donoid" TEXT NOT NULL,
    "lista_de_lances" TEXT NOT NULL,
    CONSTRAINT "Leilao_donoid_fkey" FOREIGN KEY ("donoid") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Leilao" ("datalimite", "donoid", "id", "lista_de_lances", "preco", "produto") SELECT "datalimite", "donoid", "id", "lista_de_lances", "preco", "produto" FROM "Leilao";
DROP TABLE "Leilao";
ALTER TABLE "new_Leilao" RENAME TO "Leilao";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
