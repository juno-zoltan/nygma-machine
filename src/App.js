import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Advice from "./Advice.js";

function App() {
  const [advice, setAdvice] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [query, setQuery] = useState("");
  const [userName, setUserName] = useState("");
  const [saveName, setSaveName] = useState("");

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleNameChange = (e) => {
    setUserName(e.target.value);
  };

  const submitChange = (e) => {
    e.preventDefault();
    setQuery(userInput);
    setSaveName(userName);
    setUserInput("");
    setUserName("");
  };

  useEffect(() => {
    axios({
      url: `https://api.adviceslip.com/advice/search/${query}`,
      method: "GET",
      dataResponse: "json",
    }).then((res) => {
      const data = res.data;
      // check if data has object of slips
      if (data.hasOwnProperty("slips")) {
        setAdvice(res.data.slips[0].advice);
      } else {
        setAdvice(randomAdvice);
      }
    });
  }, [query]);

  const [randomAdvice, setRandomAdvice] = useState("");

  useEffect(() => {
    axios({
      url: `https://api.adviceslip.com/advice`,
      method: "GET",
      dataResponse: "json",
    }).then((res) => {
      setRandomAdvice(res.data.slip.advice);
    });
  }, []);

  return (
    <div className="App">
      <form action="submit">
        <label htmlFor="newName">Please enter your name</label>
        <input
          type="text"
          id="newName"
          onChange={handleNameChange}
          value={userName}
        />

        <label htmlFor="newAdvice">
          I would like advice on... Please stay within a single word
        </label>
        <input
          type="text"
          id="newAdvice"
          onChange={handleChange}
          value={userInput}
        />
        <button onClick={submitChange}>Submit</button>
      </form>

      <Advice answer={advice} name={saveName} />
    </div>
  );
}

export default App;
