import type { Professor } from "../types";

export const professores: Professor[] = [
  {
    id: "1",
    nome: "Dr. Hugo Feitosa",
    bio: "Especialista em Inteligência Artificial e Computação.",
    disciplinas: [
      { nome: "Lógica de Programação", curso: "Ciência da Computação", semestre: "1º Semestre" },
      { nome: "Algoritmos Avançados", curso: "Engenharia de Software", semestre: "3º Semestre" }
    ]
  },
  {
    id: "2",
    nome: "Dr. Andre Atanasio",
    bio: "Pioneiro na programação e algoritmos modernos.",
    disciplinas: [
      { nome: "Arquitetura de Computadores", curso: "Sistemas de Informação", semestre: "2º Semestre" },
      { nome: "Matemática Discreta", curso: "Ciência da Computação", semestre: "1º Semestre" }
    ]
  },
  {
    id: "3",
    nome: "Dr. Alvoro Magnus",
    bio: "Criador da linguagem COBOL e conceitos de compiladores.",
    disciplinas: [
      { nome: "Banco de Dados", curso: "Sistemas de Informação", semestre: "4º Semestre" },
      { nome: "Compiladores", curso: "Engenharia de Software", semestre: "6º Semestre" }
    ]
  }
];