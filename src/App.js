import "./App.css";
import Maze from "./Maze.js";
import GetApiResponse from "./GetApiResponse.js";

function App() {

  return (
    <div>
      <header>
        <div className="wrapper">
          <h1>Bitchin' Test Zone</h1>
        </div>
      </header>
      <main>
        <GetApiResponse />
        <Maze />
      </main>
      <footer>
        <div className="wrapper">
        <p>Created with Advice Slip API by Peter Del Mastro, Nate Yeow, Nicole de Guzman and Mandy Poon at Juno College</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
