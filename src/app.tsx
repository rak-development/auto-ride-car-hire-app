import { Header } from './components/header/header.component'
import { Footer } from './components/footer/footer.component'
import { Introduction } from './components/introduction/introduction.component'
import { WhatWeOffer } from './components/what-we-offer/what-we-offer.component'
import { WhyChooseUs } from './components/why-choose-us/why-choose-us.component'
import { Testimonials } from './components/testimonials/testimonials.component'
import { KeyFeatures } from './components/key-features/key-features.component'
import { OurFleet } from './components/our-fleet/our-fleet.component'

import './app.scss'

const App = () => (
  <>
    <Header />
    <main>
      <Introduction />
      <WhatWeOffer />
      <WhyChooseUs />
      <Testimonials />
      <KeyFeatures />
      <OurFleet />
    </main>
    <Footer />
  </>
)

export default App
