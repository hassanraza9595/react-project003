import React, { useState } from 'react';


function Child (props) {

 //   const [islit, setlit] = useState(true);
// console.log("State = ",state);

//const state = useState(true);

//let [islit, setlit] = useState(true);
// let age = 45;
//let [age, setage] = useState(58);
//let [age1, decAge] = useState(70);
//let [count, countNum] = useState(0);


    return (
        <div>
               Hello World {}
        </div>
    )
}

export default Child;

/*

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
   alert('Number Added');
   countNum(++count);
}}>
 Add + 
</button> {count}



function increase(){
    setage(++age);
}



*/

