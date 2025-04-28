import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const removeAcento = (str) => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

app.post("/ask", (req, res) => {
  const { question } = req.body;

  const normalizedQuestion = removeAcento(question.toLowerCase());

  let answer = "Não entendi direito, manda de novo aí! 🤔";

  if (normalizedQuestion.includes("elenco") || normalizedQuestion.includes("line") || normalizedQuestion.includes("jogadores") || normalizedQuestion.includes("time") || normalizedQuestion.includes("jogando")) {
    answer = "Atualmente, nossa lineup tá braba! Temos Fallen, KSCERATO, yuurih e as novas estrelas gringas Yekindar e Molodoy fortalecendo a tropa!";
  }

  else if (normalizedQuestion.includes("agenda") || normalizedQuestion.includes("proximo jogo") || normalizedQuestion.includes("jogos") || normalizedQuestion.includes("joga")) {
    answer = "A FURIA tem uns compromissos pesados vindo por aí! Em breve, eles estarão competindo no PGL Astana de 10 a 18 de maio de 2025, e logo depois, a IEM Dallas de 23 a 25 de maio de 2025. E para fechar com chave de ouro, teremos a BLAST Austin Major 2025 entre 3 e 22 de junho de 2025! Preparado para ver a FURIA brilhar? 🔥";
  }

  else if (normalizedQuestion.includes("notícia") || normalizedQuestion.includes("novidade") || normalizedQuestion.includes("contratação") || normalizedQuestion.includes("contratações")) {
    answer = "As últimas news são brabas: Yekindar, vindo da Liquid, e Molodoy, da AMKAL, chegaram pra somar no elenco! 🔥";
  }

  else if (normalizedQuestion.includes("titulos") || normalizedQuestion.includes("titulo") || normalizedQuestion.includes("conquistas") || normalizedQuestion.includes("vitórias")) {
    answer = "A FURIA já conquistou grandes títulos no CS:GO, como a ESL Pro League Season 12: North America em 2020, DreamHack Open Summer 2020: North America também em 2020, e a Intel Extreme Masters XV – New York Online: North America em 2020!";
  }

  setTimeout(() => {
    res.json({ answer });
  }, 1000);
});

app.listen(PORT, () => {
  console.log(`Server rodando na porta ${PORT} 🖥️`);
});
