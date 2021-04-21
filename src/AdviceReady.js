import { Link }from 'react-router-dom'
import {useState, useEffect } from 'react';

const AdviceReady = ({showAdvice}) => {
    
    const [backtoMaze, setBackToMaze] = useState(false);

    useEffect( () => {
        if (backtoMaze) {
          showAdvice();
        }
      })
    return(
            <div className="giveMeAdviceWrapper">
                <div className="giveMeAdvice">
                    <p>Congrats on making it through the maze! Your advice is ready for you.</p>
                    <Link to="/"><button>Give me my advice!</button></Link>
                    <button onClick = {(e)=>{setBackToMaze(true)}}>Take me back to the maze! I was kidding about wanting advice. I'm so glad you made me do this maze, it's all I need in life.</button>
                </div>
            </div>
    )
}

export default AdviceReady