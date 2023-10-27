import { Header } from './components/header/header.component';
import { WhatWeOffer } from './components/what-we-offer/what-we-offer.component';
import { KeyFeatures } from './components/key-features/key-features.component';

import './app.scss';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <WhatWeOffer />
        <KeyFeatures />
      </main>
      <footer>Footer</footer>
      <h1>Welcome to my app</h1>
    </>
  );
}

export default App;
