import HeaderLayout from "./components/header/header-layout.component";

import './app.scss';

const App: React.FC = () => {
  return (
    <>
      <HeaderLayout />
      <main>Main</main>
      <footer>Footer</footer>
      <h1>Welcome to my app</h1>
    </>
  );
}

export default App;
