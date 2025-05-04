import React from 'react';
import './Footer.css';
import { FaInstagram, FaTwitch } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6'; // ícone do X (ex-Twitter)

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="slogan">Aqui é FURIA!</p>

        <div className="social-icons">
          <a className="instagram" href="https://www.instagram.com/furiagg" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a className="x" href="https://x.com/FURIA?t=iiYZvFhvR2AkqZuEv9fsIw&s=09" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>
          <a className="twitch" href="https://www.twitch.tv/furiatv" target="_blank" rel="noopener noreferrer"><FaTwitch /></a>
        </div>

        <p className="credits">Desenvolvido por Daniel Vilela — Desafio FURIA</p>
      </div>
    </footer>
  );
};

export default Footer;
