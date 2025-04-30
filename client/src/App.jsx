import Header from './components/Header/Header.jsx';
import Main from './components/Main/Main.jsx';
import Footer from './components/Footer/Footer.jsx';
import PlayerStatsModal from './components/PlayerStatsModal/PlayerStatsModal.jsx';
function App() {
  return (
    <div className="app">
      <Header />
      <Main />
      <PlayerStatsModal />
      <Footer/>
    </div>
  );
}

export default App;