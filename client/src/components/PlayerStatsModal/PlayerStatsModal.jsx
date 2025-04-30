import React, { useState } from "react";
import "./PlayerStatsModal.css";

const PlayerStats = () => {
  const [isOpen, setIsOpen] = useState(false);

  const stats = [
    { name: "FalleN", kd: "1.01", role: "AWPer" },
    { name: "KSCERATO", kd: "1.18", role: "Rifler" },
    { name: "yuurih", kd: "1.10", role: "Entry" },
    { name: "YEKINDAR", kd: "1.07", role: "Entry/Support" },
    { name: "Molodoy", kd: "1.05", role: "Support" },
  ];

  return (
    <div className="stats-container">
      <button className="open-modal-btn" onClick={() => setIsOpen(true)}>
        📊 Ver Estatísticas
      </button>

      {isOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="close-btn" onClick={() => setIsOpen(false)}>✕</button>
            <h2>Estatísticas dos Jogadores</h2>
            <ul>
              {stats.map((player, index) => (
                <li key={index}>
                  <strong>{player.name}</strong> — K/D: {player.kd} — Função: {player.role}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlayerStats;
