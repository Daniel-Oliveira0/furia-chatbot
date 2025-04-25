import React from "react";
import "./Main.css";

const Main = () => {
  return (
    <main className="main">
      <div className="chat-window">
        <div className="messages">
          {/* As mensagens aparecerão aqui futuramente */}
        </div>
        <form className="chat-input">
          <input
            type="text"
            placeholder="Digite sua mensagem..."
            className="input"
          />
          <button type="submit" className="send-button">Enviar</button>
        </form>
      </div>
    </main>
  );
};

export default Main;
