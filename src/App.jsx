import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './Components/Header/Header'
import Search from './Components/Search/SearchBar'
import NavBar from './Components/NavBar/NavBar'
import Cart from './Components/CartWidget/CartWidget'
import ItemList from './Components/ItemListContainer/ItemList'
import Menu from './Components/Menu/Menu'
import Form from './Components/Form/Formulario'
import Container from './Components/Container/Container'



function App() {
  const [count, setCount] = useState(0)
  return (
    // <div className="App">
    //   <div>
    //     <a href="https://vitejs.dev" target="_blank">
    //       <img src="/vite.svg" className="logo" alt="Vite logo" />
    //     </a>
    //     
    <>
      <Header/>
      <NavBar/>
      <ItemList greeting="Bienvenido a Deep Audio" subtitle="Agudos, Graves, Medios...La alta fidelidad la encontras acá!"></ItemList>
      
      {/* <Menu/> */}
      {/* <Container saludo='Contenedor'></Container> */}
    
    </>
    
  )
}

export default App
