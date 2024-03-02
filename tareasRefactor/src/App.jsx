import { useState } from 'react'
import './App.css'
import { cargaDatos } from './scripts/gestionDatos'
import Lista from './components/Lista'
import { TareaModel } from './scripts/tareaModel'
import Editor from './components/Editor'

let datosGuardados = cargaDatos()
datosGuardados.listas['dia'].tareas = [
  new TareaModel('bsewbs'),
]


function App() {

  const [datos, setDatos] = useState(datosGuardados)

  return (
    <main className='w-full max-w-[500px] min-w-[250px]'>
      <Lista datos={datos.listas['dia'].tareas} />
      <Editor />
    </main>
  )
}

export default App
localStorage.removeItem('infoTareas') //borrar los datos obsoletos de la versión 1.0