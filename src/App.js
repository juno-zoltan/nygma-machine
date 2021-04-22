import "./App.css";
import GetApiResponse from "./GetApiResponse.js";
import Maze from "./Maze.js";
import Advice from "./Advice.js";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <header>
          <div className="wrapper">
            <h1>Bitchin' Test Zone</h1>
          </div>
        </header>
        <main>
          {/* <GetApiResponse /> */}
          <Route exact path="/" component={GetApiResponse} />
          {/* <Maze /> */}
          <Route path="/maze" component={Maze} />
          {/* <Advice /> */}
          <Route path="/advice" component={Advice} /> 
        </main>
        <footer>
          <div className="wrapper">
            <p>
              Created with Advice Slip API by Peter Del Mastro, Nate Yeow,
              Nicole de Guzman and Mandy Poon at Juno College
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
