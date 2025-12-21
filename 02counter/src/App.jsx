import { useState } from 'react'
import './App.css'

function App() {

  const [counter, setCounter] = useState(10) 

  // let counter =5
 
  const addValue =() => {
    // counter = counter+1
    if (counter<20){
      setCounter(counter +1)
    }
    
  }

  const removeValue = () =>{
    if (counter>0){
      setCounter(counter - 1)
    }
    
  }
  return (
   <>
    <h1> Mymoney AI</h1>
    <h2>Counter value: {counter}</h2>

    <button
    onClick={addValue}
    >Add value</button>
    <br />
    <br />
    <button
    onClick={removeValue}
    >Remove value</button>
   </>
  )
}

export default App
