import firebase from './firebase.js';
import {useEffect, useState} from 'react';


const Advice = () => {

  const [displayedName, setDisplayedName] = useState("");
  const [displayedAdvice, setDisplayedAdvice] = useState("");

  // Pulls firebase data and displays it on page
  useEffect(() => {
    const dbRef = firebase.database().ref();
    dbRef.on("value", snap => {
      snap.forEach( (childSnap) => {
        const setOfInfo = childSnap.val();
        setDisplayedAdvice(setOfInfo.input);
        setDisplayedName(setOfInfo.name);
      } )
    });
  }, []);


  return (
    <div>
      <section className='adviceSection'>
      <h4>So, {displayedName}… You asked for some life-changing advice?</h4>
        <p>Here's what Zoltan the GREAT has to say about that…</p>
        <p>{displayedAdvice}</p>
      </section>
    </div>
  );
};

export default Advice;
