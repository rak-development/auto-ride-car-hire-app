import { Header } from './components/header/header.component';
import { Footer } from './components/footer/footer-layout.component';

import './app.scss';

const App = () => {
  return (
    <>
      <Header />
      <main>Main</main>
      <h1>Welcome to my app</h1>
      <Footer />
    </>
  );
}

export default App;
