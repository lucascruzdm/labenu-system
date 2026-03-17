export interface Docentes {
  id: number;
  nome: string;
  email: string;
  dataNascimento: string;
  turmaId: number; // Tabela Turmas
  especialidade: string; // Tabela [ ListaEspecialidades ] 
}