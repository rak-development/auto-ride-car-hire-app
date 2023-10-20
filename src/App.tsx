import './App.scss';

function MyButton({ title }: { title: string }) {
  return (
    <button type='button'>{title}</button>
  );
}

import HeaderLayout from "./components/Header/HeaderLayout.component";

const App: React.FC = () => {
  return (
    <>
      <HeaderLayout />
      <main>Main</main>
      <footer>Footer</footer>
      <h1>Welcome to my app</h1>
      <MyButton title="I'm a button" />
    </>
  );
}

export default App;
