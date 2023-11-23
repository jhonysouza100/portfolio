import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import SpamCard from './SpamCard';
import SpamCursor from './SpamCursor';
import SpamContent from './SpamContent';
import { useContext } from 'react';
import AppContext from '../context/index';
function Wrapper() {
  const {theme} = useContext(AppContext); // hook para destructurar del contexto
  return (
    <div className={`wrapper ${theme && theme}`}>
      <SpamCursor />
      <SpamContent />
      <SpamCard />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default Wrapper;