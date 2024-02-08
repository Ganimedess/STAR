import PropTypes from 'prop-types';
import { useState, useRef, useEffect } from 'react'
import Tarea from './Tarea.jsx'

function Lista({titulo, editable, datosGuardados, backUpFunc}) {

  //almacena la lista de tareas
  const [listaObj, editListaObj] = useState([])
  //al editar, almacena el índice del objeto
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
  //cambia la interfaz al clicar fuera
  const handleBlur = () => {
    editSpawn(true)
    editNuevaTarea('')
  }

  //guarda datos al hacer cambios en la lista
  useEffect(() => {
    backUpFunc(titulo, listaObj)
  }, [listaObj])
  //refresca la lista al inicio con los datos guardados
  useEffect(() => {
    if (datosGuardados) {
      editListaObj(datosGuardados[titulo])
    }
  }, [datosGuardados, titulo])

  //constructor de tareas
  const crearNuevaTarea = (contenido) => {
    const fechaCreacion = new Date()
    const tareaNueva = {
      tarea : contenido,
      fecha : fechaCreacion,
      indice : fechaCreacion.getTime(),
      completado: false,
    }
    return tareaNueva
  }
  //administrador de tareas: crea nueva tarea o edita una existente
  const subirTarea = () => {
    //spread sintax: se crea una copia del array y se agrega un nuevo elemento con el valor del input
    if(nuevaTarea !== '') {
      if (editando === null) {
        //creamos un nuevo elemento
        const nuevoObj = crearNuevaTarea(nuevaTarea)
        editListaObj([...listaObj, nuevoObj])
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
  //cambia de modo creación a modo edición
  const editarTarea = (posicion, contenido) => {
    if(editable) {
      editNuevaTarea(contenido)
      editSpawn(false) //mostrar editor
      editEditando(posicion)
    }
  }
  //vigila que al pulsar enter se añada la tarea
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') subirTarea(nuevaTarea)
  }

  //elimina tarea de la lista
  const borrarTarea = (indice) => {
    const nuevaLista = listaObj.filter(tarea => tarea.indice !== indice)
    editListaObj(nuevaLista)
  }
  //marca y desmarca una tarea en la lista
  const marcaTarea = (identificador, completado) => {
    let listaMarcada = [...listaObj]
    listaMarcada.find(tarea => tarea.indice == identificador).completado = completado
    editListaObj(listaMarcada)
  }

  return (
    <>
    <div id={titulo} className={editable ? 'editable' : 'no-editable'}>

      <ul className='lista w-max'>
        {
        //mapeamos los elementos que hay en la lista (así se actualiza automáticamente)
        listaObj.map((elemento) => (
          <li key={elemento.indice} className='tarea w-max'>
            <Tarea
            indice={elemento.indice}
            completado={elemento.completado}
            pasaInfo={editarTarea}
            deletea={borrarTarea}
            marcaTarea={marcaTarea} >
              {elemento.tarea}
            </Tarea>
          </li>
        )) }
      </ul>

      <div className={editable ? '' : 'hidden'}>
        {//renderizado condicional del botón o del input
        spawn ? (
          <button className='buttonEdit crear-elemento w-max' onClick={() => editSpawn(false)}>
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
    datosGuardados: PropTypes.object,
    backUpFunc: PropTypes.func.isRequired,
}

export default Lista
