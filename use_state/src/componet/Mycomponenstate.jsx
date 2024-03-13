import React from 'react'

function Mycomponenstate({count, setCount}) {
    const handleClick=()=>{
        setCount(count+1)
    }

  return (
    <div>
        <button className='border-[4px] rounded w-[10px ] h-[75px] border-[darkblue] text-6xl bg-[yellow]' onClick={handleClick}> {count}  </button>
      </div>
  )
}

export default Mycomponenstate
    