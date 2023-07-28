import "./App.css";
import Cardlist from "./components/cardlist";
import Restart from "./components/Restart";
import Score from "./components/Score";
function App() {
  return (
    <div className="App">
      <Cardlist />
      <div>
        <Restart />
        <Score />
      </div>
    </div>
  );
}

export default App;
