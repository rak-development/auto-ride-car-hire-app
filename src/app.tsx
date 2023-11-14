import { Header } from './components/header/header.component'
import { Footer } from './components/footer/footer.component'
import { Introduction } from './components/introduction/introduction.component'

import './app.scss'
import { Testimonials } from './components/testimonials/testimonials.component'

const App = () => (
  <>
    <Header />
    <main>
      <Introduction />
      <Testimonials />
      <h1>Welcome to my app</h1>
    </main>
    <Footer />
  </>
)

export default App
