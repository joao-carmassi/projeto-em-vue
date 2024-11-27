import { IDadosTenis } from "../interfaces/IDadosTenis";

const dadosTenis = [
  {
    nome: "Tênis 1",
    descricao: "Tênis confortável e estiloso, ideal para o dia a dia.",
  },
  {
    nome: "Tênis 2",
    descricao:
      "Design moderno, perfeito para treinos intensos e atividades ao ar livre.",
  },
  {
    nome: "Tênis 3",
    descricao: "Tênis casual, com solado antiderrapante e ajuste perfeito.",
  },
  {
    nome: "Tênis 4",
    descricao: "Leve e respirável, ótimo para corredores e caminhadas longas.",
  },
  {
    nome: "Tênis 5",
    descricao:
      "Com tecnologia de amortecimento, proporciona conforto por longas horas.",
  },
  {
    nome: "Tênis 6",
    descricao:
      "Estilo arrojado e super leve, para quem busca performance e conforto.",
  },
  {
    nome: "Tênis 7",
    descricao:
      "Design elegante e moderno, ideal para combinações casuais e formais.",
  },
  {
    nome: "Tênis 8",
    descricao:
      "Tênis robusto, com ótima resistência e estabilidade para atividades físicas.",
  },
  {
    nome: "Tênis 9",
    descricao:
      "Com estilo minimalista, ideal para o uso diário com máxima comodidade.",
  },
  {
    nome: "Tênis 10",
    descricao:
      "Tênis esportivo com suporte extra para os pés durante treinos pesados.",
  },
  {
    nome: "Tênis 11",
    descricao:
      "Modelo versátil, com design confortável e cores neutras para todas as ocasiões.",
  },
];

export function baixaDadosTenis(): IDadosTenis[] {
  return dadosTenis;
}
