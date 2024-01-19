import foto from  '../assets/retrato.jpg';
import resume from '../assets/Resume-Said.pdf';
export function Hero() {
    return(
    <section id="hero" className="grid grid-cols-12 gap-11 p-4">
        <div className="col-span-12"></div>
        <div className="row-span-2"></div>

        <div className="lg:col-span-6">
            <h1 className="text-5xl max-md:text-4xl">Hello! I am <span className='text-verde'>Said Sel-lam</span>.
            <br />A digital artist eager to hone my skills with new creative challenges.</h1>
        </div>

        <img className="foto-cabecera lg:col-span-4 xl:col-span-3 xl:col-start-9 row-span-3 mt-6 lg:mt-0" src={foto} alt="self portrait" />

        <div className="lg:col-span-6 mt-6 lg:mt-0">
            <p className="">I love crafting visually captivating and user-friendly digital experiences.
            </p><p className="mt-3">
            Beyond my technical skills, I have a diverse background in sales, teaching, and customer service, which has instilled in me a deep sense of empathy and adaptability.
            </p>
            <a href={resume} download="Resume-Said.pdf">
                <button className="boton-hero text-blanco bg-oscuro hover:bg-verde hover:text-black text-xl rounded-lg mt-10 flex">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='mr-4'>
                    <path d="M4 20.3827C4.40471 20.778 4.95361 21 5.52595 21H18.4741C19.0464 21 19.5953 20.778 20 20.3827M12.0012 3V14.9425M12.0012 14.9425L16.9338 10.3793M12.0012 14.9425L7.06859 10.3793" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                <span>Resume</span></button>
            </a>
        </div>

    </section>
    )
}