import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'

const queryClient = new QueryClient()

import { Header } from './components/header/header.component'
import { Footer } from './components/footer/footer.component'
import { Introduction } from './components/introduction/introduction.component'
import { WhatWeOffer } from './components/what-we-offer/what-we-offer.component'
import { Testimonials } from './components/testimonials/testimonials.component'
import { KeyFeatures } from './components/key-features/key-features.component'
import { OurFleet } from './components/our-fleet/our-fleet.component'

import './app.scss'

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Header />
    <main>
      <Introduction />
      <WhatWeOffer />
      <Testimonials />
      <KeyFeatures />
      <OurFleet />
    </main>
    <Footer />
  </QueryClientProvider>
)

export default App
