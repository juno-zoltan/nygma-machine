import "./App.css";
import GetApiResponse from "./GetApiResponse.js";
import Maze from "./Maze.js";
import Advice from "./Advice.js";
import {useState} from "react";

function App() {

  const [showComponent, setShowComponent] = useState("api");

  return (
      <div className="siteBackground">
        <header>
          <div className="wrapper">
          <div className='frontpageContainer'>
              <h1>Ask Zoltan</h1>
              </div>
          </div>
        </header>
        <main>
          
          {
            showComponent === "api"
            ?<GetApiResponse showMaze={() => setShowComponent("maze")}/>
            : null
          }

          {
            showComponent === "maze"
            ?<Maze showAdvice={() => setShowComponent("advice")}/>
            : null
          }

          {
            showComponent === "advice"
            ?<Advice getAdvice={() => setShowComponent("api")}/>
            : null
          }

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
  );
}

export default App;
