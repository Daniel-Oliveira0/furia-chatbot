import React, { useState } from "react";
import "./PlayerStatsModal.css";

import Fallen from "../../assets/fallen.webp";
import KSCERATO from "../../assets/kscerato.webp";
import YEKINDAR from "../../assets/yekindar.webp";
import Yuurih from "../../assets/yuurih.webp";
import Molodoy from "../../assets/molodoy.webp";

const PlayerStats = () => {
  const [isOpen, setIsOpen] = useState(false);

  const stats = [
    { name: "FalleN", rating: "1.01**", role: "Entry/Mid-Caller", image: Fallen },
    { name: "KSCERATO", rating: "1.19**", role: "Rifler/Support", image:  KSCERATO},
    { name: "yuurih", rating: "1.18**", role: "Rifler", image: Yuurih },
    { name: "YEKINDAR", rating: "0.00**", role: "Rifler", image: YEKINDAR },
    { name: "Molodoy", rating: "0.00**", role: "AWPer", image: Molodoy },
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
            <div className="player-cards">
              {stats.map((player, index) => (
                <div key={index} className="player-card">
                  <div className="card-inner">
                    <div className="card-front">
                      <img src={player.image} alt={player.name} className="player-image" />
                    </div>
                    <div className="card-back">
                      <h3>{player.name}</h3>
                      <p><strong>Função:</strong> {player.role}</p>
                      <p><strong>Rating 2.1:</strong> {player.rating}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlayerStats;