import Lista from './Lista.jsx'
import PropTypes from 'prop-types';

function Bloque({titulo, modo}) {

    return(
        <section className='interfaz'>
            <h4 className='tituloLista roboto-mono text-left'>{titulo}</h4>
        <div className="rutinas"><Lista titulo={'rutinas'+titulo} editable={modo} /></div>
        <div className='tareas'><Lista titulo={'tareas'+titulo} editable={!modo} /></div>
        </section>
    )
}

Bloque.propTypes = {
    titulo: PropTypes.string.isRequired,
    modo: PropTypes.bool.isRequired,
}

export default Bloque