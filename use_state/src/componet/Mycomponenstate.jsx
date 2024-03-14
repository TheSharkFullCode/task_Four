import React, { useState } from 'react'
import UseForm from './formulario/UseForm'

function Mycomponenstate({count, setCount}) {

  const [number,setNumber]=useState(0)

    const handleClickme=()=>{
        setCount(count+1)
    }

    const Sumapar=()=>{
      setNumber(number+1)

    }

    const Restar =()=>{

      setNumber(number-1)
    }
    
  


  return (
    <div className='flex gap-3 items-center border-[2px] ' >
        <button className='border-[4px] rounded w-[10px ] h-[75px] border-[darkblue] text-6xl bg-[yellow]' onClick={handleClickme}> {count}  </button>
        <button className='border-[4px] rounded-[3px] w-[90px] h-[75px] border-[#008b1e]  text-[white] bg-[#f555f5] ' onClick={Sumapar}> Sumar  </button>

        <h1 style={{fontSize:60}}>
          {number}
        </h1>

        <button className='border-[4px] rounded-[3px] w-[90px] h-[75px] border-[#008b1e]  text-[white] bg-[#1b071b] ' onClick={Restar} > Restar </button>

    
    
     </div>

     
  )
}

export default Mycomponenstate
    