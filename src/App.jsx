import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const handleClick = (value) => {
    if(value === 'C'){
      setInput('');
      setResult('');
    }else if(value === '='){
      try{
      setResult(eval(input).toString());
      }
      catch(error){
        setResult('Error');
      }
    }else{
      setInput(input+value)
    }
  };

  const buttons= [
    '9' , '8' , '7' , '6' ,
    '5' , '4' , '3' , '2' ,
    '1' , '0' , '/' , '*' ,
     '-' , '+' , '=' , 'C',
  ]

  return (
  <div className="calculator">
    <h1 className="h1">Calculator</h1>
    <div className="display">
      <input
      type='text'
      value={input}
      readOnly
      />
      <div className='result'>{result}</div>
    </div>
    
    <div className="buttons">
      {buttons.map((btn) => (
        <button
        key={btn}
        onClick={() => 
          handleClick(btn)}
          className={btn === 'C' ? 'clear' : ""}
        >
        {btn}
        </button>
      ))}
    </div>
  </div>
  );
}

export default App
