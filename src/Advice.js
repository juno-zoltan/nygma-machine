import firebase from './firebase.js';
import {useEffect, useState} from 'react';


const Advice = () => {

  const [displayedName, setDisplayedName] = useState("");
  const [displayedAdvice, setDisplayedAdvice] = useState("");

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
      <section>
        <h4>{displayedName}</h4>
        <p>{displayedAdvice}</p>
      </section>
    </div>
  );
};

export default Advice;
