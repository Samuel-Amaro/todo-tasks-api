import { todo } from "./schema";
import { db } from "./connection";

const todos = [
  {
    title: "Comprar mantimentos",
    description:
      "Ir ao supermercado para comprar frutas, legumes, leite e pão.",
  },
  {
    title: "Enviar relatório",
    description:
      "Terminar e enviar o relatório mensal de vendas para o gerente.",
  },
  {
    title: "Marcar consulta médica",
    description: "Agendar uma consulta de rotina com o clínico geral.",
  },
  {
    title: "Limpar a casa",
    description:
      "Fazer uma faxina completa na casa, incluindo lavar o banheiro e a cozinha.",
  },
  {
    title: "Estudar para prova",
    description:
      "Revisar os capítulos 4 a 6 do livro de Matemática para a prova de sexta-feira.",
  },
  {
    title: "Enviar e-mail para cliente",
    description:
      "Responder ao e-mail do cliente sobre a atualização do projeto.",
  },
  {
    title: "Planejar viagem",
    description:
      "Pesquisar destinos e fazer um itinerário para a viagem de férias em julho.",
  },
  {
    title: "Pagar contas",
    description:
      "Pagar as contas de água, luz e internet que vencem esta semana.",
  },
  {
    title: "Organizar escritório",
    description:
      "Arrumar a mesa de trabalho e organizar os documentos no escritório.",
  },
  {
    title: "Participar de reunião",
    description:
      "Participar da reunião de equipe para discutir o andamento dos projetos.",
  },
];

/**
 * Reset database
 */
await db.delete(todo);

console.log("✔ Database reset");

/**
 * Create todos
 */
await db.insert(todo).values(todos);

console.log("✔ Created todos");

console.log('Database seeded successfully!')