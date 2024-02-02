
import './App.css'
import Lista from './components/Lista.jsx'

function App() {
    /*
    AQUÍ UN SWITCH PARA CAMBIAR DE TAREAS A RUTINAS
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
