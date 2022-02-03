import React, { useState } from "react";
import './counter.css';

export const CounterApp = () => {

  // const [{counter1, counter2}, setCounter] = useState({
  //   counter1: 10,
  //   counter2: 20,
  // });

  const [state, setState] = useState({
    counter1: 10,
    counter2: 20,
  });

  const {counter1, counter2} = state;

  return (
    <>
      <h1>Counter1 {counter1}</h1>
      <h2>Counter2 {counter2}</h2>
      <hr/>

      <button 
        className="btn btn-primary"
        // onClick={()=> {setCounter(({counter1, counter2})=> ({counter1:counter1+1, counter2}))}}
        onClick={()=> setState({...state, counter1:(counter1 +1)})}
      >
        +1
      </button>
    </>
  );
}