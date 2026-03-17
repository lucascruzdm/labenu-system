export interface Estudantes {
  id: number;
  nome: string;
  email: string;
  dataNascimento: Date | string;
  turmaId: number; // Tabela Turmas
  hobbie: string; // Tabela [ ListaHobies ] 
}