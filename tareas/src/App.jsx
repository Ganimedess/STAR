import { useState } from 'react'
import './App.css'
import Bloque from './components/Bloque.jsx'

const MODOS = {
  rutinas: true,
  tareas: false,
}

function App() {
    /*
    -añadir el switch para cambiar a rutinas
    -añadir lista de rutinas
    -añadir posibilidad de editar y borrar tareas
    -añadir lógica común para crear un solo objeto con la info de tareas
    */
  const [modo, editModo] = useState(MODOS.tareas)
  const cambiaModo = () => {
    modo ? editModo(MODOS.tareas) : editModo(MODOS.rutinas)
  }

  return (
    <>
    <button onClick={cambiaModo}>modo {modo ? 'rutinas' : 'tareas'}</button>
    <div style={{paddingBottom: '16px'}} ></div>
    <Bloque titulo='dia' modo={modo} />
    </>
  )
}

export default App
