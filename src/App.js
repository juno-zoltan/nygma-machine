import './App.css';
import { useEffect, useState } from 'react'
import useKeypress from 'react-use-keypress'
import DivObject from './DivObject';


function App() {
  const [divsArray, setDivsArray] = useState([]);
  const [playerPosition, setPlayerPostion] = useState(0);
  const [openPath, setOpenPath] = useState(true);
  // const [steps, setSteps] = useState(0);

  //connect players div position to movement function]

  //HANDLING THE MOVE CROSSCHECKING VALIDITY
  //pick up player move
  //check to see if move is valid (does the )
  //if valid, move

  //ACTUAL 
  //movement function to set players div position 

  
  
//populate the array 
const populateArray = function (howMany, newPosition) {
  const innerArray = [];
  for (let i = 0; i < howMany; i++){
    if (i === 1 || i === 11) {
      const item = DivObject('path block')
      innerArray.push(item);
    }
    else if (i === newPosition) {
      const item = DivObject('path red')
      innerArray.push(item);
    } else {
      const item = DivObject('path open')
      innerArray.push(item);
    }
  }
  setDivsArray(innerArray);
}

  //use array to populate grid squares
 useEffect(() => {
    populateArray(100, playerPosition);
  }, [playerPosition])

  //check surrounding div classnames - store 'true' in state openPath if not a block div 
  const pathCheck = function (displacement) {
    const currentLocation = playerPosition;
    const targetDirection = currentLocation + displacement;
    setOpenPath(divsArray[targetDirection].props.className === "path open")
  }  
  
  // const canIWalk = () => {
  //   openPath
  //     ? console.log(true)
  //     : console.log(false)
  // }

   //function to change the player position value -- 1822
  const activateSquare = function (displacement) {
    console.log(openPath);
    let newPosition = playerPosition;
    newPosition = (newPosition + displacement);
    // changeColour(newPosition);
    setPlayerPostion(newPosition);
    }

  useKeypress(['ArrowLeft', 'ArrowRight', 'ArrowDown', 'ArrowUp'], (event) => {
    if (event.key === 'ArrowRight') {
      pathCheck(1);
      //openPath showing previous state cycle value
      // if (openPath === true) {
      //   activateSquare(1);
      // } else {
      //   console.log("blocked!")
      // }
    }
    else if (event.key === 'ArrowLeft') {
      pathCheck(-1);
       }
    else if (event.key === 'ArrowUp') {
      pathCheck(-10);
       }
    else if (event.key === 'ArrowDown') {
      pathCheck(10);
    }
    else {
      console.log('somethings wrong!')
    }
  })

  //function to change the colour 
  // const changeColour = function (newPosition) {
  //   // divsArray[playerPosition].props.className = 'red';
  //   console.log(divsArray[playerPosition].props.className)
  // }


  return (
    <div className="App">
      <header className="App-header">
          <h1>Bitchin' Test Zone</h1>
      </header>
      <main>
       <div className="mazeContainer">
        <div className="flexContainer">
      
            {divsArray.map((item) => {
                return(
                  <div className = {item.className} key={divsArray.indexOf(item)}>

                    {item}   
             
                  </div>
                )
            })}
       
          </div>
          </div>

      </main>
    </div>
  );
}

export default App;
