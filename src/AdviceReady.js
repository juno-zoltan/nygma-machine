import { BrowserRouter as Router, Route, Link }from 'react-router-dom'

const AdviceReady = () => {
    return(
        <Router>
            <div className="giveMeAdviceWrapper">
                <div className="giveMeAdvice">
                    <p>Congrats on making it through the maze! Your advice is ready for you.</p>
                    <button><Link to="/advice">Give me my advice!</Link></button>
                    <button><Link to="/maze">I want to play the maze again!</Link></button>
                </div>
            </div>
       </Router>
    )
}

export default AdviceReady