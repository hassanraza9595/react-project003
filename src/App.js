import React, { useState } from 'react';
import './App.css';
// import Child from './child.js';
import {Message} from './Message.js';

function App() {

   // useState Hooks

   let [count, setCount] = useState(0);
  let [isMorning, setMorning] = useState(false);

  return (

    <div className={` box ${isMorning ? 'daylight' : 'night'}`} > 

    <h1 className={` ${isMorning ? 'morning' : 'night' }`}> Good {isMorning ? 'Morning' : 'Night'}</h1>
     
      <Message counter={count} />
        <br />
      <button className="button" onClick = { ()=> setCount(++count)}>Counter</button>

      <button className="button2" onClick={()=> setMorning(!isMorning)}>Day&light</button>
    
    </div>
  );
}

export default App;
