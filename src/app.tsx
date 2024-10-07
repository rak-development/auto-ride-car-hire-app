import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { Header } from './components/header/header.component'
import { Footer } from './components/footer/footer.component'
import { Introduction } from './components/introduction/introduction.component'
import { WhatWeOffer } from './components/what-we-offer/what-we-offer.component'
import { WhyChooseUs } from './components/why-choose-us/why-choose-us.component'
import { Testimonials } from './components/testimonials/testimonials.component'
import { KeyFeatures } from './components/key-features/key-features.component'
import { OurFleet } from './components/our-fleet/our-fleet.component'
import { ScrollToTop } from './components/scroll-to-top/scroll-to-top.component'

import './app.scss'

import { createContext, useContext } from 'react'
import ThemeProvider from './context/theme-context'
import { ThemeContextType } from './types/theme-context-types'
import { ThemeContext } from './context/theme-context'

const queryClient = new QueryClient()

// const themes = {
//   light: {
//     foreground: "#000000",
//     background: "#eeeeee"
//   },
//   dark: {
//     foreground: "#ffffff",
//     background: "#222222"
//   }
// };

// const ThemeContext = createContext(themes.light);

const App = () => {
  console.log('App')
  const { setThemeMode } = useContext(ThemeContext) as ThemeContextType;
  // console.log(setThemeMode)
  
  return (
    <ThemeProvider>
    {/* // <ThemeContext.Provider value={themes.dark}> */}
      <QueryClientProvider client={queryClient}>
        <Header test={ThemeContext} />
        <main>
          <Introduction />
          <WhatWeOffer />
          <WhyChooseUs />
          <Testimonials />
          <KeyFeatures />
          <OurFleet />
        </main>
        <Footer />
        <ScrollToTop />
      </QueryClientProvider>
    {/* // </ThemeContext.Provider> */}
    </ThemeProvider>
  )
}

export default App
