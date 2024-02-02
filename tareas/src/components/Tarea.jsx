import PropTypes from 'prop-types';
import { useState } from 'react';

function Tarea({children, indice}) {

    const [marcada, editMarcada] = useState(false)
    const handleCheck = (e) => editMarcada(e.target.checked)

    /*
    const [valor, editValor] = useState(children)
    const editarTarea = (nuevoValor) => {
        editValor(nuevoValor)
    }
    */

    return(
    <li className='tarea text-left w-full' >
        <label htmlFor={indice} className={`w-full ${marcada ? 'line-through' : ''}`}>
            <input onChange={handleCheck} id={indice} type="checkbox" />{children}
        </label>
    </li>
    )
}

Tarea.propTypes = {
    children: PropTypes.node.isRequired,
    indice: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default Tarea