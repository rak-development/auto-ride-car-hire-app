import { useEffect, useState } from 'react';

import { Header } from './components/header/header.component'
import { Footer } from './components/footer/footer.component'
import { Introduction } from './components/introduction/introduction.component'
import { WhatWeOffer } from './components/what-we-offer/what-we-offer.component'
import { Testimonials } from './components/testimonials/testimonials.component'
import { KeyFeatures } from './components/key-features/key-features.component'
import { OurFleet } from './components/our-fleet/our-fleet.component'
import { ScrollToTop } from './components/scroll-to-top/scroll-to-top.component';

import './app.scss'

const App = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {   
    window.addEventListener('scroll', listenToScroll);
    return () => 
       window.removeEventListener('scroll', listenToScroll); 
  }, [])
  
  const listenToScroll = () => {
    const heightToHideFrom = 3000;
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
        <Introduction />
        <WhatWeOffer />
        <Testimonials />
        <KeyFeatures />
        <OurFleet />
      </main>
      <Footer />
      {isVisible && <ScrollToTop />}
    </>
  )
}

export default App
