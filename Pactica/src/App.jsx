import './App.css'
import { useState } from 'react'

function App() {
const [nombre,setNombre] = useState("");
const nom = () =>{
  setNombre(nombre.target.value)
  console.log(nombre)
}
  return (
    <>
      <h3>Agenda de contactos</h3>
      <input onInput={nom} type="text" />
      <input type="number" />
      <button >Agregar Contacto</button>
    </>
  )
}

export default App
