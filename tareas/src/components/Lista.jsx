import PropTypes from 'prop-types';
import { useState } from 'react'
import Tarea from './Tarea.jsx'

function Lista({titulo}) {
  //almacena la lista de tareas
  const [listaObj, editListaObj] = useState([])

  //almacena el valor del input para pasárselo a otros métodos
  const [nuevaTarea, editNuevaTarea] = useState('')
  const actualizarNuevaTarea = (event) => {
    editNuevaTarea(event.target.value)
  }
  //evento que salta al darle ok
  const handleSubmit = (event) => {
    event.preventDefault()
    subirTarea(nuevaTarea)
  }
  //almacena el estado de la interfaz que puede ser ? botón : textinput
  const [spawn, editSpawn] = useState(true)
  const crearTarea = () => editSpawn(false)
  const subirTarea = (nuevaTarea) => {
    //spread sintax: se crea una copia del array y se agrega un nuevo elemento con el valor del input
    if(nuevaTarea != '') {
        const nuevoObj = {tarea : nuevaTarea, indice : indice}
        editListaObj([...listaObj, nuevoObj])
        aumentaIndice()
    }
    editNuevaTarea('')
    editSpawn(true)
  }
  //almacena el índice que va aumentando
  const [indice, editIndice] = useState(0)
  const aumentaIndice = () => {
    if (indice < 99) editIndice(indice+1)
    else editIndice(0)
  }
  //vigila que al pulsar enter se añada la tarea
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') subirTarea(nuevaTarea)
  }


  return (
    <>
    <div id={titulo} className='interfaz'>
      <h3 className='tituloLista'>{titulo}</h3>

      <ul className='lista'>
        {
        //mapeamos los elementos que hay en la lista (así se actualiza automáticamente)
        listaObj.map((elemento) => (
          <Tarea key={titulo+elemento.indice} indice={titulo+elemento.indice}>{elemento.tarea}</Tarea>
        ))
        }
      </ul>

      {//renderizado condicional del botón o del input
      spawn ? (
        <button id="buttonTarea" className='crear-elemento w-250' onClick={crearTarea}>
        + nueva tarea
        </button>
      ) : (
        <form id="inputForm" onSubmit={handleSubmit} className='w-250'>
          <textarea autoFocus={true} className='w-full ' onChange={actualizarNuevaTarea} onKeyDown={handleKeyDown} /><button className='w-full' type='submit'>ok</button>
        </form>
      )
      }
    </div>
    </>
  )
}

Lista.propTypes = {
    titulo: PropTypes.oneOfType([PropTypes.string]).isRequired,
}

export default Lista
