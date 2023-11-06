import { Header } from './components/header/header.component'
import { Footer } from './components/footer/footer.component'
import { Introduction } from './components/introduction/introduction.component'
import { WhatWeOffer } from './components/what-we-offer/what-we-offer.component';

import './app.scss'

const App = () => (
  <>
    <Header />
    <main>
      <Introduction />
      <WhatWeOffer />
      <h1>Welcome to my app</h1>
    </main>
    <Footer />
  </>
)

export default App
