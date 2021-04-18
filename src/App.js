import './App.css';
import { useEffect, useState } from 'react'
import useKeypress from 'react-use-keypress'
import DivObject from './DivObject';



 




function App() {
  const [divsArray, setDivsArray] = useState([]);
  const [playerPosition, setPlayerPostion] = useState(0);


  // setPlayerPostion(divsArray[1]);


  //connect players div position to movement function]

  //pick up player move
  //check to see if move is valid (does the )
  //if valid, move
  //movement function to set players div position 

  
  
//populate the array 
const populateArray = function (howMany) {
  const innerArray = [];
  for (let i = 0; i < howMany; i++){
    const item = DivObject('blue');
    innerArray.push(item);
  }
  setDivsArray(innerArray);
}
  
  //useEffect to fetch our data from function
  useEffect(() => {

    populateArray(100
    );
    console.log(divsArray[1]);

  }, [])

  useKeypress(['ArrowLeft', 'ArrowRight'], (event) => {
    if (event.key === 'ArrowLeft') {
      console.log(event.target);
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
                  <div class = 'square' key={item.key} tabIndex='0'>

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
