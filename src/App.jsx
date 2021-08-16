import './App.sass';
import CharacterList from "./components/CharacterList";
import Toolbar from "./components/Toolbar";

function App() {
  return (
    <div className="App">
      <CharacterList/>
      <Toolbar/>
    </div>
  );
}

export default App;
