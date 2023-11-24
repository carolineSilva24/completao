-- CreateTable
CREATE TABLE "Usuario" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT,
    "email" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Lance" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "compradorid" TEXT NOT NULL,
    "leilaoid" TEXT NOT NULL,
    "valor" REAL NOT NULL,
    CONSTRAINT "Lance_compradorid_fkey" FOREIGN KEY ("compradorid") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Lance_leilaoid_fkey" FOREIGN KEY ("leilaoid") REFERENCES "Leilao" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Leilao" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "produto" TEXT NOT NULL,
    "preco" REAL NOT NULL,
    "datalimite" DATETIME NOT NULL,
    "donoid" TEXT NOT NULL,
    "lista_de_lances" TEXT NOT NULL,
    CONSTRAINT "Leilao_donoid_fkey" FOREIGN KEY ("donoid") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");
