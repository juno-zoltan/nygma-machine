import axios from "axios";
import { useEffect, useState } from "react";
import randomAdvice from "./randomAdvice.js";
import firebase from "./firebase.js";
import zoltan from "./assets/zoltan.png";


const GetApiResponse = ({ showMaze }) => {
  // State for advice
  const [advice, setAdvice] = useState([]);

  // State for user input
  const [userInput, setUserInput] = useState("");
  const [query, setQuery] = useState("");

  // State for name input
  const [userName, setUserName] = useState("");

  // Handler for keyword input
  const handleChange = (e) => {
    setUserInput(e.target.value);
    setQuery(userInput);
  };

  // Handler for user name input
  const handleNameChange = (e) => {
    setUserName(e.target.value);
  };

  // Handler for submit button
  const submitChange = (e) => {
    e.preventDefault();
    setUserInput("");
    setUserName("");

    const dbRef = firebase.database().ref();
    const newUser = {
      name: userName,
      input: advice,
    };
    dbRef.push(newUser);
    setMazePlease(true);
  };

  useEffect(() => {
    if (query !== "") {
      // API call to return advice for keyword input
      axios({
        url: `https://api.adviceslip.com/advice/search/${query}`,
        method: "GET",
        dataResponse: "json",
      }).then((res) => {
        const data = res.data;
        // Check if data has object of slips
        if (data.hasOwnProperty("slips")) {
          setAdvice(res.data.slips[0].advice);
        } else {
          // Second API call to return advice for words not in firs API data base
          randomAdvice(setAdvice);
        }
      });
    }
  }, [query]);


  //toggling component
  const [mazePlease, setMazePlease] = useState(false);

  useEffect(() => {
    if (mazePlease) {
      showMaze();
    }
  });

  return (
    <div className="wrapper">
      <div className="scalingContainer">
        <div className="zoltanContainer">
          <img className="zoltanImg" src={zoltan} alt="fortune teller" />
        </div>
      </div>
      <div className="formContainer">
        <div className="formElement">
          <form onSubmit={submitChange}>
            <label htmlFor="newName">Please enter your name:</label>
            <input
              type="text"
              id="newName"
              onChange={handleNameChange}
              value={userName}
              required
            />

            <label htmlFor="newAdvice">
              I would like advice on... (Please, only one word, divination is an
              exact science)
            </label>
            <input
              type="text"
              id="newAdvice"
              onChange={handleChange}
              value={userInput}
              required
            />

            <div className="buttonContainer">
              <button
                type="submit"
                disabled={userName && userInput ? false : true}
              >
                submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GetApiResponse;
