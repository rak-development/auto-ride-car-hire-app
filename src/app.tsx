import { Header } from './components/header/header.component';
import { ScrollToTop } from './components/scroll-to-top/scroll-to-top.component';

import './app.scss';
import { useEffect, useState } from 'react';

const App = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {   
    window.addEventListener('scroll', listenToScroll);
    return () => 
       window.removeEventListener('scroll', listenToScroll); 
  }, [])
  
  const listenToScroll = () => {
    let heightToHideFrom = 3000;
    const winScroll = document.body.scrollTop || 
        document.documentElement.scrollTop;

    if (winScroll > heightToHideFrom) {  
      !isVisible && setIsVisible(true);
    } else {
      setIsVisible(false);
    }  
  };
  
  return (
    <>
      <Header />
      <main>
        <h1 style={{ marginTop: 2000, marginBottom: 2000}}>Welcome to my app</h1>
        {isVisible && <ScrollToTop />}
      </main>
      <footer>Footer</footer>
    </>
  );
}

export default App;
