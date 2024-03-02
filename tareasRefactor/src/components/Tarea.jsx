import { useState, useRef } from "react"
import PropTypes from 'prop-types'
import { TareaModel } from "../scripts/tareaModel"

function Tarea({datos, flujoInfo}) {

    const tareaRef = useRef()
    const [tarea, setTarea] = useState(datos)
    const [check, setCheck] = useState(datos.check)

    //
    const cambiaTarea = () => {
        setTarea(prevTarea => {
            prevTarea.completada(tareaRef.current.checked)
            return prevTarea
        })
        flujoInfo(tarea)
    }

    //
    const borraTarea = () => flujoInfo(null)

    return(
        <li className="m-2">
            <label
            className="w-full inline-block p-2 bg-slate-900/50"
            htmlFor={tarea.key} >
                <input
                className="mr-2"
                type="checkbox"
                id={tarea.key}
                ref={tareaRef}
                onChange={cambiaTarea} />
            {tarea.texto}</label>
        </li>
    )
}
export default Tarea

Tarea.propTypes = {
    datos: PropTypes.object.isRequired,
    flujoInfo: PropTypes.func.isRequired,
}