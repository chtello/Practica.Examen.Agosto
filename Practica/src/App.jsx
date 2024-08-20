import './App.css'
import { useState } from 'react'

function App() {
const [nombre,setNombre] = useState("");
const [nro,setNro] = useState(0);
const [contacto,setContacto] = useState([]);
const [contactos,setContactos] = useState= ([])

const newNombre = (event) =>{
  setNombre(event.target.value)
}
const newNro = (event) =>{
  setNro(event.target.value)
} 
const newContact = (event) => {
  
}
  return (
    <>
      <h3>Agenda de contactos</h3>
      <input onChange={newNombre} type="text" />
      <input onChange={newNro} type="number" />
      <button onClick={newContact}>Agregar Contacto</button>
    </>
  )
}

export default App
