export interface Disciplina {
  nome: string;
  curso: string;
  semestre: string;
}

export interface Professor {
  id: string;
  nome: string;
  bio: string;
  disciplinas: Disciplina[];
}

export interface ContatoForm {
  aluno: string;
  assunto: string;
  mensagem: string;
}