function MyButton({ title }: { title: string }) {
  return (
    <button type='button'>{title}</button>
  );
}

const App: React.FC = () => {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton title="I'm a button" />
    </div>
  );
}

export default App;
