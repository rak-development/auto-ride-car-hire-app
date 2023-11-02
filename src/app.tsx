import { Header } from './components/header/header.component'
import { Footer } from './components/footer/footer.component'
import { Introduction } from './components/Introduction/introduction.component'

import './app.scss'

const App = () => (
  <>
    <Header />
    <main>
        <Introduction />
        <h1>Welcome to my app</h1>
      </main>
    <Footer />
  </>
)

export default App
