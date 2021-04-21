import axios from "axios";

// API call for when keyword is not found in data base to output a random piece of advice
const randomAdvice = (setAdvice) => {
  axios({
    url: `https://api.adviceslip.com/advice`,
    method: "GET",
    dataResponse: "json",
  }).then((res) => {
    setAdvice(res.data.slip.advice);
  });
};

export default randomAdvice;
