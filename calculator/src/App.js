
import { useState } from 'react';
import './App.css';

function App() {
  const[calc,setcalc] = useState('')
  const [result, setresult] = useState('')
  const ops = ['/', '*', '+', '-','.']

  const updatecalc = value =>{
   
    if(calc.length === 10){return}
    if(
      ops.includes(value) && calc === '' ||
      ops.includes(value) && ops.includes(calc.charAt(calc.length -1))
    ) {
      return 
    }


    setcalc(calc + value)

    if( !ops.includes(value)){
      setresult(eval(calc + value).toString())
    }

  }

  const calculate = () => {
    setcalc(eval(calc).toString())
  }

  const del = () => {
    if( calc == '' ){
      return
    }

    const value = calc.slice(0,-1)
    setcalc(value)
  }
  const clear = () =>{
    setcalc('')
    setresult('')
  }
  return (
    <div className="App">
      <div className="top-screen">
        {calc|| '0' }
      </div>
          <button className='span-two' onClick={clear}>AC</button>
          <button onClick={del}>DEL</button>
          <button onClick={()=>updatecalc('/')}>/</button>
          <button  onClick={()=>updatecalc('1')}>1</button>
          <button onClick={()=>updatecalc('2')}>2</button>
          <button onClick={()=>updatecalc('3')}>3</button>
          <button  onClick={()=>updatecalc('*')}>*</button>
          <button onClick={()=>updatecalc('4')}>4</button>
          <button onClick={()=>updatecalc('5')}>5</button>
          <button onClick={()=>updatecalc('6')}>6</button>
          <button  onClick={()=>updatecalc('+')}>+</button>
          <button onClick={()=>updatecalc('7')}>7</button>
          <button onClick={()=>updatecalc('8')}>8</button>
          <button onClick={()=>updatecalc('9')}>9</button>
          <button  onClick={()=>updatecalc('-')}>-</button>
          <button  onClick={()=>updatecalc('0')}>0</button>
          <button  onClick={()=>updatecalc('.')}>.</button>
          <button className='span-two' onClick={calculate}>=</button>
          
    </div>
  );
}

export default App;
