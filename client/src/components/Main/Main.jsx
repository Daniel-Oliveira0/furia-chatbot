import React, { useState, useEffect } from "react";
import "./Main.css";

const Main = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    const welcomeMessage = {
      text: "Fala, Furioso! 👊 Pronto pra saber tudo sobre a FURIA? Manda sua pergunta aí!",
      sender: "bot",
    };
    setMessages([welcomeMessage]);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;

    setMessages([...messages, { text: input, sender: 'user' }]);
    setInput('');
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
        </div>
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
