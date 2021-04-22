import DivObject from "./DivObject";
import { useEffect, useState } from "react";
import useKeypress from "react-use-keypress";
import AdviceReady from "./AdviceReady";


const Maze = () => {
    const [divsArray, setDivsArray] = useState([]);
    const [playerPosition, setPlayerPostion] = useState(16);
    const [displayAdvice, setDisplayAdvice] = useState(false);

    //block array helper function
    const compareArray = (i) => {
        const invalidArray = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,17,19,21,22,26,28,29,30,32,39,41,43,44,45,47,49,51,53,59,60,64,66,67,69,70,72,73,74,75,76,77,79,81,85,89,90,98,99,100,102,103,104,105,107,108,110,111,112,115,119,120,121,122,124,129,131,132,134,135,137,141,142,147,149,150,152,154,155,158,159,160,164,165,169,170,171,176,178,179,180,181,182,188,189,192,193,194,195,200,205,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224];
        for (let x = 0; x < invalidArray.length; x++) {
        if (i === invalidArray[x]) {
            return true;
        }
        }
    };

    //use array to populate grid squares
    useEffect(() => {
        //populate the array
        const populateArray = function (howMany, newPosition) {
            const innerArray = [];
            for (let i = 0; i < howMany; i++) {
            if (compareArray(i)) {
                const item = DivObject("path block");
                innerArray.push(item);
            }
            else if (i === newPosition) {
                const item = DivObject("path red");
                innerArray.push(item);
            } else {
                const item = DivObject("path open");
                innerArray.push(item);
            }
            }
            setDivsArray(innerArray);
        };
        populateArray(225, playerPosition);
    },[playerPosition]);

    
    //connecting path move with arrow keys
    useKeypress(["ArrowLeft", "ArrowRight", "ArrowDown", "ArrowUp"], (event) => {
        if (event.key === "ArrowRight") {
        activateSquare(1);
        } else if (event.key === "ArrowLeft") {
        activateSquare(-1);
        } else if (event.key === "ArrowUp") {
        activateSquare(-15);
        } else if (event.key === "ArrowDown") {
        activateSquare(15);
        } else {
        console.log("somethings wrong!");
        }
    });

    //function to check validity of path and, if open, change the player position value
    const activateSquare = function (displacement) {
        const currentLocation = playerPosition;
        const targetDirection = currentLocation + displacement;
        let newPosition = playerPosition;
        if (divsArray[targetDirection].props.className === "path open") {
        newPosition = newPosition + displacement;
        }
        setPlayerPostion(newPosition);
        adviceMe(newPosition);
    };

    //trigger advice-giving at end of game
    const adviceMe = (newPosition) => {
        if (newPosition === 209) {
            setDisplayAdvice(true);
        }
    }

    return (
        <div className="wrapper">
            <p>Our fortune teller is processing your request. Please finish this maze - when you reach the end, your advice will be ready for you, should you still want it. Good luck!</p>
        <div className="mazeContainer">
          <div className="flexContainer">
            {divsArray.map((item) => {
              return (
                <div className={item.className} key={divsArray.indexOf(item)}>
                  {item}
                </div>
              );
            })}
          </div> 
                <div className="controlsContainer">
                    <div className='topArrow'>
                        <button className="arrow up" onClick={(e) => activateSquare(-15)}>up</button>
                    </div>
                     <div className='middleArrow'>
                        <button className="arrow left" onClick={(e) => activateSquare(-1)}>left</button>
                        <div className='spacer'></div>
                        <button className="arrow right" onClick={(e) => activateSquare(1)}>right</button>
                    </div>
                    <div className='bottomArrow'>
                        <button className="arrow down" onClick={(e) => activateSquare(15)}>down</button>
                    </div>         
          </div>
          {
            displayAdvice 
            ? <AdviceReady showAdvice={() => setDisplayAdvice(false)}/>
            : null
          }         
        </div>
        </div>
    )
}

export default Maze;