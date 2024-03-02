import { useState, useRef } from "react"




function Editor () {

    const editorRef = useRef()
    const [spawn, setSpawn] = useState(true)    // true : botón de crear tarea
                                                // false : caja de texto
    const [tarea, setTarea] = useState('') //esto hay que cambiarlo por una prop

    return(
        <>{


        <div className={''}>
            {//renderizado condicional del botón o del input
            spawn ? (
                <button
                    className='buttonEdit crear-elemento w-max'
                    onClick={ () => setSpawn(false) }>
                + nueva
                </button>
            ) : (
                <form className='inputForm w-full' onBlur={() => {setSpawn(true)}}>
                    <textarea
                    autoFocus
                    ref={editorRef}
                    className='w-full'
                    onChange={() => {setTarea(editorRef.current.value)}} //actualiza la variable Tarea
                    //esto hay que conectarlo con la prop que sea una función para pasar el valor a un componente padre
                    onKeyDown={''} //vijila el botón Enter
                    value={tarea} />

                    <button
                    className='w-full' type='button' onMouseDown={''} >ok</button>
                </form>
            )
            }
        </div>



        }
        </>
    )
}

export default Editor