import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className='min-h-screen w-full flex flex-col justify-center items-center'>
        <h1 className='uppercase font-bold text-2xl'>Error</h1>
        <p className='my-5 text-center'>Parece que la página que buscas no existe.<br />Pulsa para volver a la página principal:</p>
        <Link href="/"><button className='btn btn-secondary'>Inicio</button></Link>
    </div>
  )
}

export default ErrorPage