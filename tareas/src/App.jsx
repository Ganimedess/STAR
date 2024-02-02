
import './App.css'
import Lista from './components/Lista.jsx'

function App() {
    /*
    -añadir el switch para cambiar a rutinas
    -añadir lista de rutinas
    -añadir posibilidad de editar y borrar tareas
    -añadir lógica común para crear un solo objeto con la info de tareas
    */
  return (
    <>
    {/*
    AQUÍ UN SWITCH PARA CAMBIAR DE TAREAS A RUTINAS
    */}
    <Lista titulo='diaria' />
    <Lista titulo='semanal' />
    <Lista titulo='mensual' />
    <Lista titulo='anual' />
    </>
  )
}

export default App
