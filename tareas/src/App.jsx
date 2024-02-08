import { useState } from 'react'
import './App.css'
import Bloque from './components/Bloque.jsx'

const MODOS = {
  rutinas: true,
  tareas: false,
}

function App() {

  const [modo, editModo] = useState(MODOS.tareas)
  const cambiaModo = () => {
    modo ? editModo(MODOS.tareas) : editModo(MODOS.rutinas)
  }
  //almacenamiento local de datos
  let datos = JSON.parse(localStorage.getItem('infoTareas'))
  if(!datos) {
    console.log('No se han encontrado datos, se procede a crear datos en caché')
    const inicio = {
      'rutinasdia' : [],
      'tareasdia' : [],
      'rutinassem' : [],
      'tareassem' : [],
      'rutinasmes' : [],
      'tareasmes' : [],
      'rutinasaño' : [],
      'tareasaño' : [],
    }
    localStorage.setItem('infoTareas', JSON.stringify(inicio))
  }
  return (
    <>
    <button onClick={cambiaModo}>modo {modo ? 'rutinas' : 'tareas'}</button>
    <div style={{paddingBottom: '16px'}} ></div>
    <Bloque titulo='dia' modo={modo} datos={datos} />
    <Bloque titulo='sem' modo={modo} datos={datos} />
    <Bloque titulo='mes' modo={modo} datos={datos} />
    <Bloque titulo='año' modo={modo} datos={datos} />
    </>
  )
}

export default App
