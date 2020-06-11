import React, { useState } from 'react';

function Child () {

 //   const [islit, setlit] = useState(true);
// console.log("State = ",state);

//const state = useState(true);

let [islit, setlit] = useState(true);
// let age = 45;
let [age, setage] = useState(58);
let [age1, decAge] = useState(70);
let [count, countNum] = useState(0);



function increase(){
    setage(++age);
}




    return (
        <div>
                This is a component  <button onClick= {()=> setlit(!islit)}>Toggle</button> lit =  {islit? "Hassan" : "Raza"} 
                <br />
                <br />
                <button onClick={increase}>++Age</button>  Age : { age } <br />
                <button onClick={ ()=> {
                    console.log('Arrow Function');
                    decAge(--age1);
                }}>
                    -- Age 
               </button> Age : { age1 }
               <br/> <br />
               <button onClick={ ()=> {
                   console.log('Count Number');
                   countNum(++count);
               }}>
                 Add + 
               </button> {count}
        </div>
    )
}

export default Child;