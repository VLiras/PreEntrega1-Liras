import { useState,useEffect, useCallback } from "react"
import Form from "../Form/Formulario"
// import Titulo from "../Titulo/Titulo"

// export const Container=(props)=>{
//     return(
//         <>
//             <h3>{props.saludo}</h3>
//             <Titulo titulo='App' subtitulo='Subtitulo de App'/>
//             <Form/>
//         </>
//     )
// }
function Container({saludo}){
    const [contador, setContador]=useState(0)
    const [boolean,setBoolean]=useState(true)
    // let count=0 //Estado
    let fecha=Date()
    
    useEffect(()=>{
        // console.log('Algo - 1');
        console.log('Siempre en cada render - 1')
        // return()=>{
        //     console.log('Efecto de limpieza - window.removeEventListener()');
        // }
        
    })
    useEffect(()=>{
        // console.log('Algo - 1');
        console.log('Este se ejecuta una unica vez - 2')
        // return()=>{
        //     console.log('Efecto de limpieza - window.removeEventListener()');
        // }
    },[])
    
    useEffect(()=>{
        // console.log('Algo - 1');
        console.log('Solo cuando cambie el booleano - 3')
        // return()=>{
        //     console.log('Efecto de limpieza - window.removeEventListener()');
        // }
    },[boolean])
    
    const handleCount=()=>{
        // count=count+1
        // console.log(count);
        setContador(contador+1)//No se asigna ningun valor, porque es declarativo
    }
    console.log('Rendering - 4')
    return(
        <>
            <h1>{saludo}</h1>
            <h2>Contador:{contador}</h2>
            <button onClick={handleCount}>Click</button>

            <h3>Ultima click:{fecha}</h3>
            <button onClick={()=>{setBoolean(!boolean)}}>Booleano</button>
            {/* <Titulo titulo='App' subtitulo='Subtitulo de App'/>
            <Form/> */}
            
            
        </>
    )
}
export default Container