import melocoton from '../assets/images/melocotonNavidad.svg'

const Premio = () => {

    return (
        <section className="md:h-full grid content-center justify-items-center p-6 pt-24 text-center">
            <img src={melocoton} className='boing max-w-[200px] mb-6' alt="melocotón navideño" />
            <h1 className="text-4xl mb-10 font-medium">¡Enhorabuena!</h1>
            <p className="max-w-md text-xl">
            ¡Has recibido el regalo del melocotón navideño!
            Podrás disfrutar de un mes gratis de premium a partir del dia 16 de Enero. <br /><br />
            Hemos guardado tu e-mail cuando has accedido a esta web, así que solo tendrás que esperar y disfrutar.</p>
        </section>
    )

}

export default Premio