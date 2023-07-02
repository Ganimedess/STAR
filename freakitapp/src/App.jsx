import './App.css'
import heroImage from './assets/images/heroimg.png'
import heart from './assets/images/heart.png'
import ball from './assets/images/ball.png'
import mockup from './assets/images/mockup.png'
import apple from './assets/images/Apple-App-Store-Logo.png'
import googleps from './assets/images/google-play-badge.png'
import banderas from './assets/images/banderas.png'
import flower from './assets/images/flower.png'
import brain from './assets/images/brain.png'
import planet from './assets/images/planet.png'
import videoF from './assets/images/video.mp4'
import amanda from './assets/images/amanda-propic.jpeg'
import alba from './assets/images/alba-propic.jpeg'
import jon from './assets/images/jon-propic.jpeg'
import vid1 from './assets/images/vidComedyCon.png'
import vid2 from './assets/images/vidUPM.png'
import vid3 from './assets/images/vidRadioNakama.png'
import logo1 from './assets/images/logos-media/flooxer.png'
import logo2 from './assets/images/logos-media/notizie-logo.png'
import logo3 from './assets/images/logos-media/anime2you.webp'
import logo4 from './assets/images/logos-media/confidencial-logo.jpeg'
import logo5 from './assets/images/logos-media/20minutos.png'
import logo6 from './assets/images/logos-media/elcomercio-logo.jpeg'
import Carousel from './components/Carousel'

function App() {

  const slides = [
    <div className="max-w-full w-96 flex flex-col items-center">
      <p className="text-2xl font-bold">Gran aplicación</p>
      <p>Mr otaku R</p>
      <div className="rating py-3">
        <input type="radio" name="rating-2" className="mask mask-star bg-primary" />
        <input type="radio" name="rating-2" className="mask mask-star bg-primary" />
        <input type="radio" name="rating-2" className="mask mask-star bg-primary" />
        <input type="radio" name="rating-2" className="mask mask-star bg-primary" />
        <input type="radio" name="rating-2" className="mask mask-star bg-primary" checked />
      </div>
      <p>Gran aplicación para la gente del mundo &quot;friki&quot; y que detrás ha tenido un gran trabajo. Totalmente recomendable</p>
    </div>,
    <div className="max-w-full w-96 flex flex-col items-center">
      <p className="text-2xl font-bold">Idea genial</p>
      <p>FrancoForti</p>
      <div className="rating py-3">
        <input type="radio" name="rating-2" className="mask mask-star bg-primary" />
        <input type="radio" name="rating-2" className="mask mask-star bg-primary" />
        <input type="radio" name="rating-2" className="mask mask-star bg-primary" />
        <input type="radio" name="rating-2" className="mask mask-star bg-primary" />
        <input type="radio" name="rating-2" className="mask mask-star bg-primary" checked />
      </div>
      <p>Excelente app, la base de la idea me parece sencillamente espectacular</p>
    </div>,
    <div className="max-w-full w-96 flex flex-col items-center">
      <p className="text-2xl font-bold">Muy buena pinta!</p>
      <p>Dieguniyeah</p>
      <div className="rating py-3">
        <input type="radio" name="rating-2" className="mask mask-star bg-primary" />
        <input type="radio" name="rating-2" className="mask mask-star bg-primary" />
        <input type="radio" name="rating-2" className="mask mask-star bg-primary" />
        <input type="radio" name="rating-2" className="mask mask-star bg-primary" />
        <input type="radio" name="rating-2" className="mask mask-star bg-primary" checked />
      </div>
      <p>Llevo unos días con ella y tiene una usabilidad y un concepto que son lo más</p>
    </div>,
    <div className="max-w-full w-96 flex flex-col items-center">
      <p className="text-2xl font-bold">🙂</p>
      <p>GuanZhaot</p>
      <div className="rating py-3">
        <input type="radio" name="rating-2" className="mask mask-star bg-primary" />
        <input type="radio" name="rating-2" className="mask mask-star bg-primary" />
        <input type="radio" name="rating-2" className="mask mask-star bg-primary" />
        <input type="radio" name="rating-2" className="mask mask-star bg-primary" />
        <input type="radio" name="rating-2" className="mask mask-star bg-primary" checked />
      </div>
      <p>Buena aplicación la cual llevo esperando tiempo.<br />Ahora a seguir disfrutando<br />Enhorabuena</p>
    </div>,
    ];

  return (
    <div className="overflow-hidden">
        <div className="absolute w-full h-full herobg">
          <img src={ball} alt="gráficos decorativos" className='absolute min-w-fit max-sm:min-h-screen top-[-200px] right-[-500px]' />
          <img src={heart} alt="gráficos decorativos" className='absolute min-w-fit max-sm:min-h-screen md:top-[-50px] heartHero' />
        </div>
      <section id='hero' className="hero md:h-screen min-h-screen md:min-h-[800px] relative text-white">
        <div className="hero-content flex-col-reverse md:flex-row-reverse max-w-screen-lg p-10 lg:p-0">
          <img src={heroImage} alt='captura de pantalla app' className="max-w-sm rounded-lg heroImg z-40" />
          <div className="lg:bg-white/30 lg:rounded-[40px] pt-24 lg:p-11 lg:pr-32 heroCaja mb-10">
            <h1 className="text-5xl font-bold">La aplicación más popular para conocer otakus</h1>
            <p className="py-6 text-xl">Conoce gente, haz amigos, encuentra el amor.<br/>Descubre la mayor comunidad de otakus en español.</p>
            <div className="join">
              <a target='_blank' rel='noreferrer' href="https://play.google.com/store/apps/details?id=com.freakit.dev&hl=es_419&gl=US"><img src={apple} alt="descarga para apple ios" className='join-item' /></a>
              <a target='_blank' rel='noreferrer' href="https://apps.apple.com/es/app/freakit/id6446035400" className="ml-7 join-item" ><img src={googleps} alt="descarga desde google play store" /></a>
            </div>
          </div>
        </div>
      </section>

      <section id='second' className="max-w-screen-lg m-auto flex p-10 lg:p-0">
        <div className="grid grid-second">
          <img src={mockup} alt="interfaz freakit" className='md:p-10 img-second w-full max-w-[400px] md:max-w-full m-auto' />
          <div className="text-second">
            <h2 className='text-4xl lg:text-5xl font-medium'>¡Haz amigos con tus mismos intereses!</h2>
            <p className='py-6 text-xl'>Elige amigos por su personalidad gracias a nuestro test psicológico.</p>
          </div>
          <div className='bg-white rounded-[40px] shadow-xl shadow-primary/30 w-fit px-5 lg:px-7 card-second m-auto md:ml-0'>
            <p className='py-6 text-lg text-center'><b>¡Ya disponible en 4 paises!</b><br />España, México, Chile y Colombia <br />
            <img className='max-w-[250px] w-full m-auto mt-0' src={banderas} alt="banderas de España, México, Chile y Colombia" />
            </p>
          </div>
        </div>
      </section>

      <section id='arguments' className="max-w-screen-lg m-auto flex flex-col mt-12 lg:mt-32 p-10 lg:p-0">
        <h3 className='text-3xl mb-12'>Descubre lo que te ofrecemos:</h3>
        <div className='flex max-sm:flex-wrap justify-center md:justify-between'>
          <div className='card max-w-[300px] rounded-none border-blueF border-l'>
            <figure><img src={flower} alt="icono flor" className='max-w-[120px]' /></figure>
            <div className="card-body">
              <h4 className="card-title text-xl">Comunidad otaku</h4>
              <p className='text-md'>Freakit está lleno de gente como tú. ¡Ven a conocer otros otakus!</p>
            </div>
          </div>
          <div className='card max-w-[300px] rounded-none border-blueF border-l'>
            <figure><img src={brain} alt="icono cerebro" className='max-w-[120px]' /></figure>
            <div className="card-body">
              <h4 className="card-title text-xl">Test de personalidad</h4>
              <p className='text-md'>Descubre a qué personaje de anime te pareces según tu personalidad</p>
            </div>
          </div>
          <div className='card max-w-[300px] rounded-none border-blueF border-l'>
            <figure><img src={planet} alt="icono planeta tierra" className='max-w-[120px]' /></figure>
            <div className="card-body">
              <h4 className="card-title text-xl">Diversidad</h4>
              <p className='text-md'>Una comunidad segura donde todxs nos sintamos respetadxs</p>
            </div>
          </div>
        </div>
      </section>

      <section id='instructions' className="max-w-screen-lg m-auto mt-12 lg:mt-40 p-10 lg:p-0">
        <h3 className='text-3xl'>¿Cómo funciona?</h3>
        <div className='flex flex-wrap'>
          <div className='flex flex-col justify-center my-12 max-md:w-full'>
            <div className='bg-white p-4 lg:p-6 rounded shadow-lg shadow-primary/30 flex'>
              <svg xmlns="http://www.w3.org/2000/svg" height="auto" className="bi bi-cloud-arrow-down" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M7.646 10.854a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 9.293V5.5a.5.5 0 0 0-1 0v3.793L6.354 8.146a.5.5 0 1 0-.708.708l2 2z"/>
                <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z"/>
              </svg>
              <div className='text-primary pl-5'>
                <h4 className='text-2xl lg:text-3xl mb-0 lg:mb-2' >Descarga la app</h4>
                <p className='text-md' >Está disponible para IOS y Android</p>
              </div>
            </div>
            <div className='bg-white p-4 lg:p-6 rounded shadow-lg shadow-primary/30 flex mt-3'>
              <svg xmlns="http://www.w3.org/2000/svg" height="auto" className="bi bi-clipboard-check" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
                <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
              </svg>
              <div className='text-primary pl-5'>
                <h4 className='text-2xl lg:text-3xl mb-0 lg:mb-2' >Haz el test</h4>
                <p className='text-md' >Así sabrás a qué personaje de anime te pareces</p>
              </div>
            </div>
            <div className='bg-white p-4 lg:p-6 rounded shadow-lg shadow-primary/30 flex mt-3'>
              <svg xmlns="http://www.w3.org/2000/svg" height="auto" className="bi bi-person-plus-fill" viewBox="0 0 16 16">
                <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                <path fillRule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
              </svg>
              <div className='text-primary pl-5'>
                <h4 className='text-2xl lg:text-3xl mb-0 lg:mb-2' >Encuentra gente</h4>
                <p className='text-md' >Mira los perfiles de otros usuarios</p>
              </div>
            </div>
            <div className='bg-white p-4 lg:p-6 rounded shadow-lg shadow-primary/30 flex mt-3'>
              <svg xmlns="http://www.w3.org/2000/svg" height="auto" fill="currentColor" className="bi bi-chat-heart" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M2.965 12.695a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2Zm-.8 3.108.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125ZM8 5.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z"/>
              </svg>
              <div className='text-primary pl-5'>
                <h4 className='text-2xl lg:text-3xl mb-0 lg:mb-2' >Chatea</h4>
                <p className='text-md' >Si ambos os gustáis, It&apos;s a UWU!</p>
              </div>
            </div>
          </div>
          <div className="mockup-phone rounded-[40px] lg:rounded-[50px]">
            <div className="camera"></div>
            <div className="display">
              <div className="artboard artboard-demo lg:w-[284px] lg:h-[600px] w-[213px] h-[450px]"><video autoPlay loop playsInline muted type="video/mp4" ><source src={videoF} /></video></div>
            </div>
          </div>
        </div>
      </section>

      <section id="comments" className="text-center mt-12 lg:mt-40 z-20 max-w-full overflow-hidden">
        <h3 className='text-3xl'>¿Qué dicen de nosotros?</h3>
        <Carousel slides={slides} />
      </section>

      <section id='team' className="max-w-screen-lg m-auto mt-12 lg:mt-40 relative p-10 lg:p-0">
        <div className="absolute w-full h-full">
          <img src={heart} alt="gráficos decorativos" className='atras absolute min-w-fit left-[-100px] top-[-200px] heartTeam rotate-[330deg]' />
        </div>
        <h3 className='text-3xl mb-12'>Equipo:</h3>
        <div className='flex flex-wrap max-md:flex-col md:flex-nowrap justify-center md:justify-between max-md:items-center'>
          <div className="card max-w-[250px] lg:max-w-[300px] shadow-xl shadow-primary/30 mr-3 bg-base-100/90">
            <figure><img src={amanda} alt="avatar de Amanda"className='w-full' /></figure>
            <div className="card-body">
              <h4 className="card-title">Amanda</h4>
              <p>co-founder</p>
              <p className='text-sm'>`No importa qué tan difícil o imposible sea, no pierdas de vista tu objetivo`</p>
            </div>
          </div>
          <div className="card max-w-[250px] lg:max-w-[300px] shadow-xl shadow-primary/30 mr-3 bg-base-100/90 my-5 md:my-0">
            <figure><img src={alba} alt="avatar de Alba"className='w-full' /></figure>
            <div className="card-body">
              <h4 className="card-title">Alba</h4>
              <p>co-founder</p>
              <p className='text-sm'>`Hazlo o no lo hagas, pero no lo intentes`</p>
            </div>
          </div>
          <div className="card max-w-[250px] lg:max-w-[300px] shadow-xl shadow-primary/30 bg-base-100/90">
            <figure><img src={jon} alt="avatar de Jon"className='w-full' /></figure>
            <div className="card-body">
              <h4 className="card-title">Jon</h4>
              <p>CTO</p>
              <p className='text-sm'>`Un verdadero maestro es un estudiante eterno`</p>
            </div>
          </div>
        </div>
      </section>

      <section id='media' className="max-w-screen-lg m-auto mt-12 lg:mt-40 relative max-lg:p-10">
        <h3 className='text-3xl mb-12'>Freakit en los medios:</h3>
        <div className="flex max-sm:flex-wrap justify-center sm:justify-between">
          <div><a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=0PtjKPdrDFs"><img src={vid1} alt="vídeo Comedy-Con Youtube" /></a></div>
          <div className="sm:mx-2 max-sm:my-7"><a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=ozQK7hjm5oQ"><img src={vid2} alt="vídeo UPM Youtube" /></a></div>
          <div><a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=IX3zq1dwmcQ&t=2218s"><img src={vid3} alt="vídeo Radio Nakama Youtube" /></a></div>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-3 max-w-lg gap-10 m-auto mt-10 justify-items-center'>
          <div className='bg-white rounded p-2 aspect-square flex items-center max-w-[145px]'><img src={logo1} alt="logo flooxer" /></div>
          <div className='bg-white rounded p-2 aspect-square flex items-center max-w-[145px]'><img src={logo2} alt="logo notizie" /></div>
          <div className='bg-white rounded p-2 aspect-square flex items-center max-w-[145px]'><img src={logo3} alt="logo anime2you" /></div>
          <div className='bg-white rounded p-2 aspect-square flex items-center max-w-[145px]'><img src={logo4} alt="logo el confidencial" /></div>
          <div className='bg-white rounded p-2 aspect-square flex items-center max-w-[145px]'><img src={logo5} alt="logo 20 minutos" /></div>
          <div className='bg-white rounded p-2 aspect-square flex items-center max-w-[145px]'><img src={logo6} alt="logo el comercio" /></div>
        </div>
      </section>
    </div>
  )
}

export default App
