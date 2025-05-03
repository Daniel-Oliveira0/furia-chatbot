const express = require("express");
const cors = require("cors");

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
  titles: ["titulo", "titulos", "conquista", "conquistas", "vitoria", "vitorias"],
};

const matchKeyword = (category, question) => {
  return keywords[category].some((keyword) => question.includes(keyword));
};

app.post("/ask", (req, res) => {
  const { question } = req.body;
  const normalizedQuestion = removeAccents(question.toLowerCase());

  const responses = [];

  if (matchKeyword("lineup", normalizedQuestion)) {
    responses.push(
      "Agora nossa lineup tá braba! O Professor: Fallen, KSCERATO, yuurih e as novas estrelas gringas Yekindar e Molodoy fortalecendo a tropa!"
    );
  }

  if (matchKeyword("schedule", normalizedQuestion)) {
    responses.push(
      "Vem muita emoção por aí, Furioso! A FURIA já tem data marcada pra entrar no servidor: começa dia 10 de maio contra a The MongolZ na PGL Astana 2025. Logo em seguida, eles encaram a IEM Dallas de 23 a 25 de maio. E segura o coração: o BLAST Austin Major rola de 3 a 22 de junho. É a tropa em busca da glória!"
    );
  }

  if (matchKeyword("news", normalizedQuestion)) {
    responses.push(
      "As últimas news são brabas: Yekindar, vindo da Liquid, e Molodoy, da AMKAL, chegaram pra somar no elenco e já vão estrear dia 10 contra o The MongolZ!"
    );
  }

  if (matchKeyword("titles", normalizedQuestion)) {
    responses.push(
      "A FURIA já conquistou grandes títulos no CS:GO, como a ESL Pro League Season 12: North America em 2020, DreamHack Open Summer 2020: North America também em 2020, e a Intel Extreme Masters XV – New York Online: North America em 2020!"
    );
  }

  if (responses.length === 0) {
    responses.push("Não entendi direito, manda de novo aí! 🤔");
  }

  const finalAnswer = responses.join(" ");
  setTimeout(() => {
    res.json({ answer: finalAnswer });
  }, 1000);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
