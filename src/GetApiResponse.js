import axios from "axios";
import { useEffect, useState } from "react";
import Advice from "./Advice.js";
import randomAdvice from "./randomAdvice.js";

const GetApiResponse = () => {
  // State for advice
  const [advice, setAdvice] = useState([]);

  // State for user input
  const [userInput, setUserInput] = useState("");
  const [query, setQuery] = useState("");

  // State for name input
  const [userName, setUserName] = useState("");
  const [saveName, setSaveName] = useState("");

  // Handler for keyword input
  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  // Handler for user name input
  const handleNameChange = (e) => {
    setUserName(e.target.value);
  };

  // Handler for submit button
  const submitChange = (e) => {
    e.preventDefault();
    setQuery(userInput);
    setSaveName(userName);
    setUserInput("");
    setUserName("");
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

  return (
    <div>
      <form onSubmit={submitChange}>
        <label htmlFor="newName">Please enter your name</label>
        <input
          type="text"
          id="newName"
          onChange={handleNameChange}
          value={userName}
          required
        />

        <label htmlFor="newAdvice">
          I would like advice on... Please stay within a single word
        </label>
        <input
          type="text"
          id="newAdvice"
          onChange={handleChange}
          value={userInput}
          required
        />
        <button type="submit">submit</button>
      </form>

      <Advice answer={advice} name={saveName} />
    </div>
  );
};

export default GetApiResponse;
