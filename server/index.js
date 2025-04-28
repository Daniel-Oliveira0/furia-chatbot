import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const removeAccents = (str) => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

const keywords = {
  lineup: ["elenco", "line", "jogadores", "time", "jogando"],
  schedule: ["agenda", "proximo jogo", "jogos", "jogo", "joga"],
  news: ["noticia", "noticias", "novidade", "contratacao", "contratacoes"],
  titles: ["titulo", "titulos", "conquista", "conquistas", "vitoria", "vitorias"]
};

const matchKeyword = (category, question) => {
  return keywords[category].some(keyword => question.includes(keyword));
};

app.post("/ask", (req, res) => {
  const { question } = req.body;

  const normalizedQuestion = removeAccents(question.toLowerCase());

  let answer = "Não entendi direito, manda de novo aí! 🤔";

  if (matchKeyword("lineup", normalizedQuestion)) {
    answer = "Atualmente, nossa lineup tá braba! Temos Fallen, KSCERATO, yuurih e as novas estrelas gringas Yekindar e Molodoy fortalecendo a tropa!";
  } 
  else if (matchKeyword("schedule", normalizedQuestion)) {
    answer = "A FURIA tem uns compromissos pesados vindo por aí! Em breve, eles estarão competindo no PGL Astana de 10 a 18 de maio de 2025, e logo depois, a IEM Dallas de 23 a 25 de maio de 2025. E para fechar com chave de ouro, teremos a BLAST Austin Major 2025 entre 3 e 22 de junho de 2025! Preparado para ver a FURIA brilhar? 🔥";
  } 
  else if (matchKeyword("news", normalizedQuestion)) {
    answer = "As últimas news são brabas: Yekindar, vindo da Liquid, e Molodoy, da AMKAL, chegaram pra somar no elenco! 🔥";
  } 
  else if (matchKeyword("titles", normalizedQuestion)) {
    answer = "A FURIA já conquistou grandes títulos no CS:GO, como a ESL Pro League Season 12: North America em 2020, DreamHack Open Summer 2020: North America também em 2020, e a Intel Extreme Masters XV – New York Online: North America em 2020!";
  }

  setTimeout(() => {
    res.json({ answer });
  }, 1000);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} 🖥️`);
});
