import {React, useRef, useState}  from 'react'
import visible from "../reyes/visible.jpg";
import oculto from "../reyes/oculto.jpg";

function UseForm() {
  
  const [imagen, setImagen] = useState(visible);

  // const [clave, setClave] = useState("");
  
  // const [clave2, setClave2] = useState("");
  
  const [texto, setTexto] = useState("");

  const inputRef1 = useRef();
  const inputRef2 = useRef();

  const NuevaImagen = () => {

    setImagen(imagen === visible ? oculto : visible);
  
    

  }

  const ComprobarClave=(e)=>{

    e.preventDefault();

    const valorClave1 = inputRef1.current.value;
    const valorClave2 = inputRef2.current.value;

    if (valorClave1 === valorClave2) {
        setTexto("Enhorabuena las son correctas!!!");
    } else {
        setTexto('Las contraseñas son incorrectas');
    }
  }

  return (
    <div className='bg-[#c2f5c2]' >

        <form action="" className='flex items-center gap-2' onSubmit={ComprobarClave}>

            <label htmlFor="">Introduce una clave</label> <input type="password"  className='rounded' ref={inputRef1} /> <br />
            <label htmlFor="">Repite la clave</label> <input type="password"  className='rounded' ref={inputRef2}/> <br />

            <button type='submit'  className='border-[2px] p-[6px] rounded border-[black] bg-[#3aa824]' >  Enviar </button> 
            
            <button className='border-[2px] p-[6px] rounded border-[black] bg-[#3aa824]'  >Borrar</button>
            <textarea name="texto-pizarra" className='w-[180px] h-[90px] rounded resize-none' value={texto}  ></textarea>

            <img src={imagen} style={{height:150, width:150}} className='rounded-[50px]' onClick={NuevaImagen}/>

        </form>
    </div>
  );
}

export default UseForm
