import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post("/ask", (req, res) => {
  const { question } = req.body;
  const lowerQuestion = question.toLowerCase();

  let answer = "Não entendi direito, manda de novo aí! 🤔";

  if (lowerQuestion.includes("elenco") || lowerQuestion.includes("line") || lowerQuestion.includes("jogadores")  || lowerQuestion.includes("time") || lowerQuestion.includes("jogando")) {
    answer = "Atualmente, nossa lineup tá braba! 💥 Temos Fallen, KSCERATO, yuurih e as novas estrelas gringas Yekindar e Molodoy fortalecendo a tropa!";
  } else if (lowerQuestion.includes("agenda") || lowerQuestion.includes("próximo jogo") || lowerQuestion.includes("jogos") || lowerQuestion.includes("joga")) {
    answer = "Infelizmente a FURIA foi eliminada do PGL Bucharest 2025... 😢 Ainda não temos o próximo compromisso marcado.";
  } else if (lowerQuestion.includes("notícia") || lowerQuestion.includes("novidade") || lowerQuestion.includes("contratação") || lowerQuestion.includes("contratações")) {
    answer = "As últimas news são brabas: Yekindar, vindo da Liquid, e Molodoy, da AMKAL, chegaram pra somar no elenco! 🔥";
  }

  res.json({ answer });
});

app.listen(PORT, () => {
  console.log(`Server rodando na porta ${PORT} 🖥️`);
});
