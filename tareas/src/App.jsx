import { useState, useEffect } from 'react'
import './App.css'
import Bloque from './components/Bloque.jsx'
import { calcularPuntos } from './components/gestorPuntos.js'

const MODOS = {
  rutinas: true,
  tareas: false,
}
//almacenamiento local de datos
const datosGuardados = JSON.parse(localStorage.getItem('infoTareas'))
//arranque inicial
if(!datosGuardados) {
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
    puntos: {
      fecha: new Date(), //fecha de última modificación de la lista
      totales : 0,
      historial : [],
    },
  }
  localStorage.setItem('infoTareas', JSON.stringify(inicio))
}
//datos actualizados para pasarlos a la app
const datosDisplay = calcularPuntos(datosGuardados)


function App() {

  const [modo, editModo] = useState(MODOS.tareas)
  const cambiaModo = () => {
    modo ? editModo(MODOS.tareas) : editModo(MODOS.rutinas)
  }
  const [datos, editDatos] = useState({...datosDisplay})

  return (
    <>
    <h1 className='puntos roboto-mono'>{datos.puntos ? datos.puntos.totales : 'bug'}</h1>
    <button onClick={cambiaModo}>modo {modo ? 'rutinas' : 'tareas'}</button>
    <div style={{paddingBottom: '16px'}} ></div>
    <Bloque titulo='dia' modo={modo} datos={datos} />
    <Bloque titulo='sem' modo={modo} datos={datos} />
    <Bloque titulo='mes' modo={modo} datos={datos} />
    <Bloque titulo='año' modo={modo} datos={datos} />
    {/*

    */}
    <button onClick={() => {
      localStorage.removeItem('infoTareas')
      location.reload();
      }}>borra caché</button>
    </>
  )
}

export default App

/*
const inicio = {
  listas : {
    'dia' : {
      rutinas : [],
      tareas : [],
    },
    'sem' : {
      rutinas : [],
      tareas : [],
    },
    'mes' : {
      rutinas : [],
      tareas : [],
    },
    'año' : {
      rutinas : [],
      tareas : [],
    },
  },
  estado : {
    fecha : new Date(), //fecha de última modificación de la lista
    puntos : 0,
  },
  historial : [],
}
*/