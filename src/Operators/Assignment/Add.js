import React from 'react'
import {useState} from 'react';

const Add = () => {
  const [numbers,setNumbers]=useState("");
  const[datas,setDatas]=useState([]);
const [adds,setAdds]=useState([5]);

function handleChange(e)
{
setNumbers(e.target.value);
}

function handleClick()
{
  setDatas([...datas,numbers]);
}


function handleNumber()
{
  setAdds(...datas+adds);
}

console.log(adds)

  return (
    <>
    <input type='number' onChange={handleChange} value={numbers}/>
    <button onClick={handleClick}>Add Number</button>

<button onClick={handleNumber} value={adds}>Addition</button>
    <h1>th number is {adds} </h1>
    </>
  )
}

export default Add