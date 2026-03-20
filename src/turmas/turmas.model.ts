import { Docentes } from "src/docentes/docentes.model";
import { Estudantes } from "src/estudantes/estudantes.model";

export class Turmas {
    id: number;
    nome: string;
    docentes: number; // Id criadas na tabela Docentes
    estudantes: number; // Id criadas na Tabela Etudantes
    modulo: number;

}
