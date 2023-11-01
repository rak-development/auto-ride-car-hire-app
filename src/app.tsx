import { Header } from "./components/header/header.component";

import './app.scss';
import { OurFleet } from "./components/our-fleet/our-fleet.component";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <OurFleet />
      </main>
      <footer>Footer</footer>
      <h1>Welcome to my app</h1>
    </>
  );
}

export default App;
