import './App.css';
import RhymeFinder from "./components/RhymeFinder";
import Header from "./components/Header";

function App() {

  return (
      <main className="container">
          <a href={'https://github.com/jnbrowning/579_problemset6/tree/main/src'}>Link to code</a>
          <Header />
          <RhymeFinder />
      </main>
  );
}

export default App;