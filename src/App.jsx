import './App.css';
import './css/rgb.css'
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import SpamCard from './components/SpamCard';
import SpamCursor from './components/SpamCursor';
import SpamContent from './components/SpamContent';
import scrollReveal from './js/scrollReveal';
import { useEffect } from 'react';

function App() {
  
  scrollReveal()

  
  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "mode": "no-cors"
    },
    body: {
      "id": 1,
      "count": 1
    }
  };

  const getViews = async () => {
    try {
      const res = await fetch("https://views-ik9xt2fxq-jhonysouza100.vercel.app/api");
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  

  useEffect(() => {
    getViews();
  }, [])
  

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
