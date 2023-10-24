import HeaderLayout from './components/header/header-layout.component';
import { FooterLayout } from './components/footer/footer-layout.component';

import './app.scss';

const App: React.FC = () => {
  return (
    <>
      <HeaderLayout />
      <main>Main</main>
      <h1>Welcome to my app</h1>
      <FooterLayout />
    </>
  );
}

export default App;
