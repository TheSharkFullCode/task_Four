import { useState } from 'react'
import { useRef } from 'react'
import teodorico from "../src/componet/reyes/rey_teodorico.png";
import './App.css'
import ComponetState from './componet/ComponetState';

function App() {

  const [count, setCount] = useState(0);

  const input1Ref = useRef(null);
  const input2Ref = useRef(null);
  const pizarraRef = useRef(null);

  
  const handleClick = () => {

    const num1 = parseInt(input1Ref.current.value);
    const num2 = parseInt(input2Ref.current.value);
    const result = num1 + num2;
     
    setCount(result);
    pizarraRef.current.value = `${result}`

    
  }

  return (
    <div>
      <div className='flex items-center justify-center border-[2px] border-[green] rounded-[4px] h-[100px] bg-[#ffae00]'>  
            <h1 className='text-[#1a0715] text-6xl '>welcome to my app page web</h1>
      </div>
      <div className='border-[2px] rounded-[2px] border-[green] flex  items-center gap-2'>

           <button className='border-[2px] p-[6px] rounded border-[black] bg-[#3aa824]' onClick={handleClick} >Sumar</button>

           <input ref={input1Ref}  type="text" id='num1' className='border-[2px] border-[blue] rounded w-[50px]' />+

           <input ref={input2Ref} type="text" id='num2' className='border-[2px] border-[blue] rounded w-[50px]'  />=

           <textarea  ref={pizarraRef} className='border-[2px] border-[black] rounded resize-none text-center text-5xl w-[90px] h-[60px]  '  name="pizarra" id="pizarra" ></textarea>
      </div>
      <div>
        <ComponetState img={teodorico}/>
      </div>
    </div>
  )
}

export default App
