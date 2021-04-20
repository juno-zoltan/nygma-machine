import './App.css';
import { useEffect, useState } from 'react'
import useKeypress from 'react-use-keypress'
import DivObject from './DivObject';


function App() {
  const [divsArray, setDivsArray] = useState([]);
  const [playerPosition, setPlayerPostion] = useState(0);

//block array helper function
const compareArray = (i) => {
  const invalidArray = [1, 2, 44, 36, 68];
  for (let x = 0; x < invalidArray.length; x++) {
    if (i === invalidArray[x]) {
      return true;
    } 
 }}

//populate the array 
 const populateArray = function (howMany, newPosition) {
  const innerArray = [];     
  for (let i = 0; i < howMany; i++) {
    if (compareArray(i)) {    
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


   //function to check validity of path and, if open, change the player position value
  const activateSquare = function (displacement) {
    const currentLocation = playerPosition;
    const targetDirection = currentLocation + displacement;
    let newPosition = playerPosition;
    if (divsArray[targetDirection].props.className === "path open") {
      newPosition = (newPosition + displacement);
    } 
    setPlayerPostion(newPosition);
    }

    //connecting path move with arrow keys
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
