import React, { useState } from 'react'
import imagenRey from './reyes/rey_atanagildo.png';
import  ataulfo  from './reyes/rey_ataulfo.png';
import leogivildo from "./reyes/rey_leogivildo.png";
import reyIncongnito from "./reyes/rey_incognito.png";

function ComponetState({img}) {

    const [imagenActual, setImagenActual]=useState(img)

    const  CambiarImagen=()=>{

        setImagenActual(imagenRey);
    }

  return (
    <div className='flex'>
        <div className='border-[2px] rounded'>

              <img src={imagenActual} alt="Rey Atanagildo"  onClick={CambiarImagen} />
        </div>
        <div className='border-[2px] rounded'>

            <img src={ataulfo} alt="rey_ataulfo" />
        </div>
        <div className='border-[2px] rounded'>

            <img src={leogivildo} alt="rey_leogivildo" />
        </div>
        <div className='border-[2px] rounded'>

            <img src={reyIncongnito} alt="rey_leogivildo" />
        </div>
    </div>
  )
}

export default ComponetState
