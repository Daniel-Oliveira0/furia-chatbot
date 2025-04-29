import React, { useEffect, useState } from "react";
import axios from "axios";
import "./LiveStatus.css";

const LiveStatus = () => {
  const [statusData, setStatusData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLiveStatus = async () => {
      try {
        const response = await axios.get("http://localhost:5000/live-status");
        setStatusData(response.data);
      } catch (error) {
        console.error("Erro ao buscar status do jogo:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLiveStatus();

    const interval = setInterval(fetchLiveStatus, 30000);

    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="live-status loading">
        <p>Carregando status do jogo...</p>
      </div>
    );
  }

  if (!statusData) {
    return (
      <div className="live-status error">
        <p>Não foi possível carregar o status do jogo.</p>
      </div>
    );
  }

  return (
    <div className="live-status-container">
      <h2>Status do Jogo 🎮</h2>
      <div className="live-status-card">
        <p><strong>Adversário:</strong> {statusData.opponent}</p>
        <p><strong>Placar:</strong> {statusData.score}</p>
        <p><strong>Status:</strong> {statusData.status}</p>
      </div>
    </div>
  );
};

export default LiveStatus;
