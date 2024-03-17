import React, { useState } from 'react'


function ComponetCounter() {
    const [counter,setCounter]= useState(0);
    const [currentColor,setCurrentColorIndex]= useState(0)
    const colors = ['','green', 'red','teal','cyan', 'purple', 'orange', 'pink', 'blue', 'yellow'];



    const addColor=()=>{

        setCounter(prev => (prev  +=1));
        const ColorIndex = Math.floor(Math.random()*colors.length);
        setCurrentColorIndex(ColorIndex)
    }
    const Subs=()=>{
        
        setCounter(prev =>(prev-=1));

        const ColorIndex = Math.floor(Math.random()*colors.length);
        setCurrentColorIndex(ColorIndex)
    }
    const currentColorRecently = colors[currentColor];

  return (
    <div>
        <span>vamos a crear  nuevamente un boton de suma y otro de resta.</span> <br />

        {/* <button onClick={()=> setCounter(prev => (prev  +=1))} className='border-[black] border-[2px] rounded p-3 py-3 bg-[#eaea73]'>suma</button> 
        <button onClick={()=> setCounter(prev =>(prev-=1))} className='border-[black] border-[2px] rounded p-3 py-3 bg-[#8bf08b]' >resta </button> <br /> <br /> */}

        <button onClick={addColor}  className='border-[black] border-[2px] rounded p-3 py-3 bg-[#eaea73]'>suma</button> 

        <button onClick={Subs} className='border-[black] border-[2px] rounded p-3 py-3 bg-[#8bf08b]' >resta </button> <br /> <br />

         <span className='border-[black] border-[2px] rounded p-3 py-3 ' style={{backgroundColor:currentColorRecently}}>
                        {counter}
         </span>
    </div>
  )
}

export default ComponetCounter
