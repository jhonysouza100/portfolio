import './App.css';
import './css/rgb.css'
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import SpamCard from './components/SpamCard';
import SpamCursor from './components/SpamCursor';
import SpamContent from './components/SpamContent';
import scrollReveal from './js/scrollReveal';

function App() {
  
  scrollReveal()

  

  return (
    <div className="App"> {/*body*/}
      <SpamCursor />
      <SpamContent />
      <SpamCard />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
