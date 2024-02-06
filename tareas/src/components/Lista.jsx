import PropTypes from 'prop-types';
import { useState, useRef } from 'react'
import Tarea from './Tarea.jsx'

function Lista({titulo, editable}) {

  //almacena la lista de tareas
  const [listaObj, editListaObj] = useState([])
  //al editar, almacena el índice del objeto a editar
  const [editando, editEditando] = useState(null)
  //referencia el textarea
  const editor = useRef(null)
  //almacena el valor del input para pasárselo a otros métodos
  const [nuevaTarea, editNuevaTarea] = useState('')
  const actualizarNuevaTarea = (event) => {
    editNuevaTarea(event.target.value)
  }
  //almacena el estado de la interfaz que puede ser -> botón o textarea
  const [spawn, editSpawn] = useState(true)
  //almacena el índice que va aumentando (para numerar las tareas)
  const [indice, editIndice] = useState(0)
  const aumentaIndice = () => {
    if (indice < 99) editIndice(indice+1)
    else editIndice(0)
  }

  //cambia la interfaz al clicar fuera
  const handleBlur = () => {
    editSpawn(true)
    editNuevaTarea('')
  }
  //subir una tarea NUEVA
  const subirTarea = () => {
    //spread sintax: se crea una copia del array y se agrega un nuevo elemento con el valor del input
    if(nuevaTarea !== '') {
      if (editando === null) {
        const nuevoObj = {tarea : nuevaTarea, indice : titulo+indice}
        editListaObj([...listaObj, nuevoObj])
        aumentaIndice()
      } else {
        const nuevaLista = listaObj.map((item) => {
          if (item.indice == editando) {
            let newItem = {...item}
            newItem.tarea = nuevaTarea
            return newItem
          }
          return item
        })
        editListaObj(nuevaLista)
        editEditando(null)
      }
    }
    editNuevaTarea('')
    editSpawn(true)
  }
  //vigila que al pulsar enter se añada la tarea
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') subirTarea(nuevaTarea)
  }
  //
  const editarTarea = (posicion, contenido) => {
  if(editable) {
    editNuevaTarea(contenido)
    editSpawn(false) //mostrar editor
    editEditando(posicion)
  }
  }
  //
  const borrarTarea = (indice) => {
    const nuevaLista = listaObj.filter(tarea => tarea.indice !== indice)
    editListaObj(nuevaLista)
  }

  return (
    <>
    <div id={titulo} className={editable ? 'editable' : 'no-editable'}>

      <ul className='lista w-250'>
        {
        //mapeamos los elementos que hay en la lista (así se actualiza automáticamente)
        listaObj.map((elemento) => (
          <li key={elemento.indice} className='tarea'>
            <Tarea
            indice={elemento.indice}
            pasaInfo={editarTarea}
            deletea={borrarTarea} >
              {elemento.tarea}
            </Tarea>
          </li>
        ))
        }
      </ul>

      <div className={editable ? '' : 'hidden'}>
        {//renderizado condicional del botón o del input
        spawn ? (
          <button className='buttonEdit crear-elemento w-250' onClick={() => editSpawn(false)}>
          + nueva
          </button>
        ) : (
          <form className='inputForm w-full' onBlur={handleBlur}>
            <textarea
            autoFocus
            ref={editor}
            className='w-full'
            onChange={actualizarNuevaTarea}
            onKeyDown={handleKeyDown}
            value={nuevaTarea} />

            <button
            className='w-full' type='button' onMouseDown={() => subirTarea()} >ok</button>
          </form>
        )
        }
      </div>
    </div>
    </>
  )
}

Lista.propTypes = {
    titulo: PropTypes.string.isRequired,
    editable: PropTypes.bool.isRequired,
}

export default Lista
