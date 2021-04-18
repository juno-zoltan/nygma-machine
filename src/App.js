import './App.css';
import { useEffect, useState } from 'react'
import useKeypress from 'react-use-keypress'
import DivObject from './DivObject';


function App() {
  const [divsArray, setDivsArray] = useState([]);
  const [playerPosition, setPlayerPostion] = useState(0);

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
    if (i === newPosition) {
      const item = DivObject('red')
       innerArray.push(item);
    }
    else {
      const item = DivObject('blue')
      innerArray.push(item);
    }
  }
  setDivsArray(innerArray);
}
  
  //useEffect to fill the array on initial load
  useEffect(() => {

    populateArray(100, playerPosition);
    console.log(divsArray[13]);
  

    
  }, [])

  

 useEffect(() => {

    populateArray(100, playerPosition);
    
  }, [playerPosition])

  // useEffect(() => {
  //   activateSquare(12);
  // },[])

    
    //function to change the player position value
  const activateSquare = function (displacement) {
    let newPosition = playerPosition;
    newPosition = (newPosition + displacement);
    changeColour(newPosition);
    setPlayerPostion(newPosition);
  
  }

  //function to change the colour 
  const changeColour = function (newPosition) {
    // divsArray[playerPosition].props.className = 'red';
    console.log(divsArray[playerPosition].props.className)
  }


  useKeypress(['ArrowLeft', 'ArrowRight', 'ArrowDown', 'ArrowUp'], (event) => {
    if (event.key === 'ArrowRight') {
      activateSquare(1);
    }
    else if (event.key === 'ArrowLeft') {
      activateSquare(-1);
       }
    else if (event.key === 'ArrowUp') {
      activateSquare(-10);
       }
    else if (event.key === 'ArrowDown') {
      activateSquare(10);
    }
    else {
      console.log('somethings wrong!')
    }
  })


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
                  <div className = {item.className} key={item.key} tabIndex='0'>

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
