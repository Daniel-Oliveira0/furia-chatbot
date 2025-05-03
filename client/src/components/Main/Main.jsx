import React, { useState, useRef, useEffect } from "react";
import "./Main.css";
import Menu from "./Menu/Menu";
import './MainResponsive.css';

const Main = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const messagesContainerRef = useRef(null);

  useEffect(() => {
    const welcomeMessage = {
      text: "Fala, Furioso! 👊 Pronto pra saber tudo sobre a FURIA? Manda sua pergunta aí!",
      sender: "bot",
    };
    setMessages([welcomeMessage]);
  }, []);

  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTo({
        top: messagesContainerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (input.trim() === '') return;

    sendMessage(input, 'user');

    try {
      const response = await fetch('http://localhost:5000/ask', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question: input }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      sendMessage(data.answer, 'bot');
    } catch (error) {
      console.error('Erro na conexão ou na resposta da IA:', error);
      sendMessage('Deu ruim na conexão ou na resposta do servidor! 😢', 'bot');
    }

    setInput('');
  };

  const sendMessage = (text, sender = 'user') => {
    if (typeof text !== 'string' || text.trim() === '') {
      console.warn('Tentou enviar uma mensagem inválida:', text);
      return;
    }
    setMessages((prevMessages) => [...prevMessages, { text, sender }]);
  };

  const handleMenuClick = (option) => {
    let question = '';
    let botResponse = '';

    switch (option) {
      case "Agenda de Jogos":
        question = "Quando é o próximo jogo da nossa FURIA? 😎";
        botResponse = "Já anota aí, Furioso! O próximo confronto da FURIA é contra a The MongolZ pela PGL Astana 2025, no dia 10 de maio de 2025. Depois disso, vem mais pedreira: IEM Dallas e o tão esperado BLAST Austin Major 2025 de 3 a 22 de junho. Vem bala, vem emoção, vem FURIA!";
        break;
      case "Elenco":
        question = "Quem são os nossos jogadores?";
        botResponse = "A line da FURIA mudou, hein! Skullz e chelo deixaram a Lineup principal e agora a tropa tá com o coach brabo Side e com as estrelas: Começando pelo Professor FalleN, KSCERATO e yuurih, e os reforços gringos Yekindar e Molodoy.";
        break;
      case "Notícias":
        question = "O que está rolando de mais quente na FURIA? 🔥";
        botResponse = "Fica ligado, Furioso! A última call foi pesada: Yekindar saiu da Liquid e veio fechar com a gente, e o Molodoy largou a AMKAL pra vestir a camisa pesada da FURIA. E já vão jogadar juntos na PGL Astana 2025 contra a The MongolZ!";
        break;
      default:
        question = "O que você quer saber mais? 🤔";
        botResponse = "Me diga mais para eu poder te ajudar! 😉";
    }

    sendMessage(question, 'user');

    setTimeout(() => {
      sendMessage(botResponse, 'bot');
    }, 1000);
  };

  const handleClearChat = () => {
    const welcomeMessage = {
      text: "Fala, Furioso! 👊 Pronto pra saber tudo sobre a FURIA? Manda sua pergunta aí!",
      sender: "bot",
    };
    setMessages([welcomeMessage]);
  };

  return (
    <main className="main">
      <div className="chat-window">
        <div className="messages" ref={messagesContainerRef}>
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`message ${msg.sender === 'user' ? 'user' : 'bot'}`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        <button className="clear-button" onClick={handleClearChat}>
          🗑️ Limpar Chat
        </button>

        <Menu onOptionClick={handleMenuClick} />

        <form className="chat-input" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Digite sua mensagem..."
            className="input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit" className="send-button">Enviar</button>
        </form>
      </div>
    </main>
  );
};

export default Main;
