import { Header } from './components/header/header.component';
import { Footer } from './components/footer/footer.component';

import './app.scss';
import { Introduction } from './components/Introduction/introduction.component';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Introduction />
      </main>
      <h1>Welcome to my app</h1>
      <Footer />
    </>
  );
}

export default App;
