import React, { useState, useEffect, useRef } from "react";
import "./Main.css";
import Menu from "./Menu/Menu";

const Main = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const welcomeMessage = {
      text: "Fala, Furioso! 👊 Pronto pra saber tudo sobre a FURIA? Manda sua pergunta aí!",
      sender: "bot",
    };
    setMessages([welcomeMessage]);
  }, []);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
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

      const data = await response.json();
      sendMessage(data.answer, 'bot');
    } catch (error) {
      console.error('Erro na conexão com a IA:', error);
      sendMessage('Deu ruim na conexão com o servidor! 😢', 'bot');
    }

    setInput('');
  };

  const sendMessage = (text, sender = 'user') => {
    setMessages((prevMessages) => [...prevMessages, { text, sender }]);
  };

  const handleMenuClick = (option) => {
    let question = '';
    let botResponse = '';

    switch (option) {
      case "Agenda de Jogos":
        question = "Quando é o próximo jogo da nossa FURIA? 😎";
        botResponse = "Infelizmente a FURIA foi eliminada do PGL Major Bucharest 2025... 😓 Por enquanto, ainda não tem próximo jogo marcado, mas fica de olho que a tropa vai voltar com tudo!";
        break;
      case "Elenco":
        question = "Quem são os nossos jogadores?";
        botResponse = "A line da FURIA mudou, hein! Skullz e chelo deixaram a Lineup principal e agora a tropa tá com o coach brabo Side e com as estrelas: FalleN, KSCERATO e yuurih, e os reforços gringos Yekindar e Molodoy.";
        break;
      case "Notícias":
        question = "O que está rolando de mais quente na FURIA? 🔥";
        botResponse = "Fica ligado, Furioso! A última call foi pesada: Yekindar saiu da Liquid e veio fechar com a gente, e o Molodoy largou a AMKAL pra vestir a camisa pesada da FURIA. Agora é outro patamar, irmão!";
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

  return (
    <main className="main">
      <div className="chat-window">
        <div className="messages">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`message ${msg.sender === 'user' ? 'user' : 'bot'}`}
            >
              {msg.text}
            </div>
          ))}

          <div ref={messagesEndRef} />
        </div>

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
