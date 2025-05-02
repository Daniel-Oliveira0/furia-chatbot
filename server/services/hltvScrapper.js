const { HLTV } = require('hltv');

async function getFuriaPlayerStats() {
  try {
    const teamData = await HLTV.getTeam({ id: 6667 }); 

    const players = teamData.players.map(player => ({
      name: player.name,
      ign: player.ign,
      image: player.image, 
      id: player.id,
    }));

    return players;
  } catch (err) {
    console.error('Erro ao buscar dados da FURIA:', err);
    throw err;
  }
}

module.exports = { getFuriaPlayerStats };
