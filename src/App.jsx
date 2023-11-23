import './App.css';
import './css/rgb.css'
import Wrapper from './components/Wrapper';
import scrollReveal from './js/scrollReveal';
import { AppProvider } from './context/index';

function App() {
  
  // animacion al hacer scroll en la pagina
  scrollReveal()

  return (
    <div className="App"> {/*body*/}
      <AppProvider>
        <Wrapper />
      </AppProvider>
    </div>
  );
}

export default App;
