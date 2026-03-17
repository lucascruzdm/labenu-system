-- CreateTable
CREATE TABLE "Turmas" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "docentes" INTEGER NOT NULL,
    "estudantes" INTEGER NOT NULL,
    "modulo" INTEGER NOT NULL,

    CONSTRAINT "Turmas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Estudantes" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "dataNascimento" TIMESTAMP(3) NOT NULL,
    "turmaId" INTEGER NOT NULL,
    "hobbie" TEXT NOT NULL,

    CONSTRAINT "Estudantes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Docentes" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "dataNascimento" TIMESTAMP(3) NOT NULL,
    "turmaId" INTEGER NOT NULL,
    "especialidade" TEXT NOT NULL,

    CONSTRAINT "Docentes_pkey" PRIMARY KEY ("id")
);
