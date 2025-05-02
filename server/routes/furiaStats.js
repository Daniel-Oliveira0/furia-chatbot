const express = require('express');
const router = express.Router();
const { getFuriaPlayerStats } = require('../services/hltvScrapper');

router.get('/api/stats', async (req, res) => {
  try {
    const players = await getFuriaPlayerStats();
    res.json(players);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar estatísticas dos jogadores.' });
  }
});

module.exports = router;
