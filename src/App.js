import "./App.css";
import Maze from "./Maze.js";
import GetApiResponse from "./GetApiResponse.js";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="siteBackground">
        <header>
          <div className="wrapper">
          <div className='frontpageContainer'>
              <h1>Ask Zoltan</h1>
              </div>
          </div>
        </header>
        <main>
           <div className='formContainer'>
          {/* <GetApiResponse /> */}
          <Route exact path="/" component={GetApiResponse} />
          {/* <Maze /> */}
            <Route path="/maze" component={Maze} />
            
            </div>
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
