# FURIA Fan Chatbot

Um chatbot interativo para fãs do time de CS da FURIA, com respostas inteligentes, agenda de jogos, novidades, conquistas e estatísticas dos jogadores. Desenvolvido como parte do desafio **"Experiência Conversacional" da FURIA**.

---

## 📌 Funcionalidades

- 💬 Simulador de conversa com o fã
- 🧠 Respostas baseadas em palavras-chave
- 📅 Agenda de campeonatos futuros
- 📰 Últimas notícias do time
- 🏆 Títulos conquistados
- 📊 Modal com estatísticas dos jogadores

---

## 🛠️ Tecnologias Utilizadas

### Frontend
- React + Vite
- CSS Modules

### Backend
- Node.js
- Express
- CORS

---

## 📁 Estrutura do Projeto

```
furia-chatbot/
├── client/              # Frontend React
│   ├── src/
│   │   ├── components/  # Componentes organizados por função
│   │   ├── App.jsx
│   │   ├── main.jsx
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
├── server/              # Backend Node.js com Express
│   ├── index.js         # Configuração do Bot
│   ├── package.json
│
└── README.md            # Documentação do projeto
```

---

## ▶️ Como rodar localmente

### Pré-requisitos

- Node.js v18+
- npm

### Clone o repositório

```bash
git clone https://github.com/seu-usuario/furia-chatbot.git
cd furia-chatbot
```

---

## 🖥️ Rodando o Backend

```bash
cd server
npm install
npm run dev  # ou node index.js
```

O backend será iniciado em `http://localhost:5000`

---

## 💻 Rodando o Frontend

```bash
cd client
npm install
npm run dev
```

O frontend será iniciado em `http://localhost:5173`

---

## 📦 Variáveis de Ambiente

Se necessário, crie um arquivo `.env` dentro da pasta `server` com:

```
PORT=5000
```

---

## 📝 Contribuições

Esse projeto foi criado para o desafio proposto pela FURIA e não está aberto para contribuições no momento.

---


## 📃 Licença

Esse projeto é apenas para fins de demonstração acadêmica/desafio e não possui licença de uso comercial.
