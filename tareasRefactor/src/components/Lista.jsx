import Tarea from "./Tarea"
import PropTypes from 'prop-types'

function Lista({datos}) {



    const cambiaTarea = (info) => {
        console.log(info)
    }

    return(
        <ul className="text-left">
        {
            datos.map(
                tarea => <Tarea
                    key={tarea.key}
                    datos={tarea}
                    flujoInfo={cambiaTarea} />)
        }
        </ul>
    )
}

Lista.propTypes = {
    datos: PropTypes.array.isRequired,
}

export default Lista