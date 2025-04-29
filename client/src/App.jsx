import Header from './components/Header/Header.jsx';
import Main from './components/Main/Main.jsx';
import Footer from './components/Footer/Footer.jsx';
import LiveStatus from './components/LiveStatus/LiveStatus.jsx';''
function App() {
  return (
    <div className="app">
      <Header />
      <Main />
      <LiveStatus/>
      <Footer/>
    </div>
  );
}

export default App;