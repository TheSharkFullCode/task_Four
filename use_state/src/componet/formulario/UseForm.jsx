import React from 'react'
import imagina from "../reyes/rey_ataulfo.png";
function UseForm() {
  return (
    <div>

        <form action="">
            <label htmlFor="">Usuario:</label> <input type="text" className='rounded' /> <br />
            <label htmlFor="">Contraseña</label> <input type="password"  className='rounded'/> <br />

            <button className='border-[2px] p-[6px] rounded border-[black] bg-[#3aa824]'>  Enviar</button> 
            <button className='border-[2px] p-[6px] rounded border-[black] bg-[#3aa824]'>Borrar</button>
            <img src={imagina} style={{height:150, width:150}}/>

        </form>
    </div>
  )
}

export default UseForm
