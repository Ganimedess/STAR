import '../../App.css'
import heroImage from '../../assets/images/gifHero.gif'
import heart from '../../assets/images/heart.webp'
import ball from '../../assets/images/ball.webp'
import mockup from '../../assets/images/mockup.png'
import apple from '../../assets/images/Apple-App-Store-Logo.png'
import googleps from '../../assets/images/google-play-badge.png'
import flower from '../../assets/images/flower.png'
import brain from '../../assets/images/brain.png'
import planet from '../../assets/images/planet.png'
import videoF from '../../assets/images/video.MOV'
import amanda from '../../assets/images/amanda-propic.jpeg'
import alba from '../../assets/images/alba-propic.jpeg'
import jon from '../../assets/images/jon-propic.jpeg'
import vid1 from '../../assets/images/vidComedyCon.png'
import vid2 from '../../assets/images/vidUPM.png'
import vid3 from '../../assets/images/vidRadioNakama.png'
import logo1 from '../../assets/images/logos-media/flooxer.png'
import logo2 from '../../assets/images/logos-media/notizie-logo.png'
import logo3 from '../../assets/images/logos-media/anime2you.webp'
import logo4 from '../../assets/images/logos-media/confidencial-logo.jpeg'
import logo5 from '../../assets/images/logos-media/20minutos.png'
import logo6 from '../../assets/images/logos-media/elcomercio-logo.jpeg'
import Carousel from '../../components/Carousel'
import iconoMundos from '../../assets/images/iconos/iconoMundos.png'

function AppEn() {

  const slides = [
    <div className="max-w-full w-96 flex flex-col items-center">
      <p className="text-2xl font-bold">Great Application</p>
      <p>Mr otaku R</p>
      <div className="rating py-3">
        <input type="radio" name="rating-2" className="mask mask-star bg-primary" />
        <input type="radio" name="rating-2" className="mask mask-star bg-primary" />
        <input type="radio" name="rating-2" className="mask mask-star bg-primary" />
        <input type="radio" name="rating-2" className="mask mask-star bg-primary" />
        <input type="radio" name="rating-2" className="mask mask-star bg-primary" checked />
      </div>
      <p>Great application for people in the &quot;geek&quot; world and it&apos;s clear that a lot of hard work has gone into it. Highly recommended</p>
    </div>,
    <div className="max-w-full w-96 flex flex-col items-center">
      <p className="text-2xl font-bold">Great idea</p>
      <p>FrancoForti</p>
      <div className="rating py-3">
        <input type="radio" name="rating-2" className="mask mask-star bg-primary" />
        <input type="radio" name="rating-2" className="mask mask-star bg-primary" />
        <input type="radio" name="rating-2" className="mask mask-star bg-primary" />
        <input type="radio" name="rating-2" className="mask mask-star bg-primary" />
        <input type="radio" name="rating-2" className="mask mask-star bg-primary" checked />
      </div>
      <p>Excellent app, I find the core idea simply spectacular</p>
    </div>,
    <div className="max-w-full w-96 flex flex-col items-center">
      <p className="text-2xl font-bold">Looking great!</p>
      <p>Dieguniyeah</p>
      <div className="rating py-3">
        <input type="radio" name="rating-2" className="mask mask-star bg-primary" />
        <input type="radio" name="rating-2" className="mask mask-star bg-primary" />
        <input type="radio" name="rating-2" className="mask mask-star bg-primary" />
        <input type="radio" name="rating-2" className="mask mask-star bg-primary" />
        <input type="radio" name="rating-2" className="mask mask-star bg-primary" checked />
      </div>
      <p>I've been using it for a few days now, and its usability and concept are top-notch</p>
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
      <p>Good application which I've been waiting for a while. Now let's keep enjoying.<br/> Congratulations</p>
    </div>,
    ];

  return (
    <div className="overflow-hidden">
        <div className="absolute w-full h-full herobg">
          <img src={ball} alt="gráficos decorativos" className='absolute min-w-fit max-sm:min-h-screen top-[-200px] right-[-500px]' />
          <img src={heart} alt="gráficos decorativos" className='absolute min-w-fit max-sm:min-h-screen md:top-[-50px] heartHero' />
        </div>
      <section id='hero' className="hero md:h-screen min-h-screen md:min-h-[800px] relative text-white aparece">
        <div className="hero-content flex-col-reverse md:flex-row-reverse max-w-screen-lg p-10 lg:p-0">
          <img src={heroImage} alt='captura de pantalla app' className="max-w-sm rounded-[30px] heroImg z-40 max-h-[550px]" />
          <div className="lg:bg-white/30 lg:rounded-[40px] pt-24 lg:p-11 lg:pr-32 heroCaja mb-10">
            <h1 className="text-5xl font-bold">The most popular app to meet otakus</h1>
            <p className="py-6 text-xl">Meet people, make friends, find love.<br/>Discover the largest otaku community in Spanish.</p>
            <div className="join">
              <a target='_blank' rel='noreferrer' href="https://apps.apple.com/es/app/freakit/id6446035400"><img src={apple} alt="descarga para apple ios" className='join-item' /></a>
              <a target='_blank' rel='noreferrer' href="https://play.google.com/store/apps/details?id=com.freakit.dev&hl=es_419&gl=US" className="ml-7 join-item" ><img src={googleps} alt="descarga desde google play store" /></a>
            </div>
          </div>
        </div>
      </section>

      <section id='second' className="max-w-screen-lg m-auto flex p-10 lg:p-0 aparece">
        <div className="grid grid-second">
          <img src={mockup} alt="interfaz freakit" className='md:p-10 img-second w-full max-w-[400px] md:max-w-full m-auto' />
          <div className="text-second">
            <h2 className='text-4xl lg:text-5xl font-medium'>Make friends with people who share your interests!</h2>
            <p className='py-6 text-xl'>Visit our themed worlds <img className='inline' src={iconoMundos} /> and find like-minded spirits without any distance limits.</p>
          </div>
          <div className='bg-white rounded-[40px] shadow-xl shadow-primary/30 w-fit px-5 lg:px-7 card-second m-auto md:ml-0'>
          </div>
        </div>
      </section>

      <section id='arguments' className="max-w-screen-lg m-auto flex flex-col mt-12 lg:mt-32 p-10 lg:p-0 aparece">
        <h3 className='text-3xl mb-12'>Discover what we offer:</h3>
        <div className='flex max-sm:flex-wrap justify-center md:justify-between'>
          <div className='card max-w-[300px] rounded-none border-blueF border-l'>
            <figure><img src={flower} alt="icono flor" className='max-w-[120px]' /></figure>
            <div className="card-body">
              <h4 className="card-title text-xl">Otaku community</h4>
              <p className='text-md'>Freakit! is full of people like you. Come and meet other otakus!</p>
            </div>
          </div>
          <div className='card max-w-[300px] rounded-none border-blueF border-l'>
            <figure><img src={brain} alt="icono cerebro" className='max-w-[120px]' /></figure>
            <div className="card-body">
              <h4 className="card-title text-xl">Personality test</h4>
              <p className='text-md'>Find out which anime character you resemble based on your personality</p>
            </div>
          </div>
          <div className='card max-w-[300px] rounded-none border-blueF border-l'>
            <figure><img src={planet} alt="icono planeta tierra" className='max-w-[120px]' /></figure>
            <div className="card-body">
              <h4 className="card-title text-xl">Diversity</h4>
              <p className='text-md'>A safe community where everyone feels respected</p>
            </div>
          </div>
        </div>
      </section>

      <section id='instructions' className="max-w-screen-lg m-auto mt-12 lg:mt-40 p-10 lg:p-0 aparece">
        <h3 className='text-3xl'>How does it work?</h3>
        <div className='flex flex-wrap'>
          <div id='instrucciones-tarjetas' className='flex flex-col justify-center my-12 max-md:w-full'>
            <div className='bg-white p-4 lg:p-6 rounded shadow-lg shadow-primary/30 flex'>
              <svg xmlns="http://www.w3.org/2000/svg" height="auto" className="bi bi-cloud-arrow-down" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M7.646 10.854a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 9.293V5.5a.5.5 0 0 0-1 0v3.793L6.354 8.146a.5.5 0 1 0-.708.708l2 2z"/>
                <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z"/>
              </svg>
              <div className='text-primary pl-5 flex flex-col justify-center'>
                <h4 className='text-2xl lg:text-3xl mb-0 lg:mb-2' >Download the app</h4>
                <p className='text-md' >Available for IOS and Android</p>
              </div>
            </div>
            <div className='bg-white p-4 lg:p-6 rounded shadow-lg shadow-primary/30 flex mt-3'>
              <svg xmlns="http://www.w3.org/2000/svg" height="auto" className="bi bi-clipboard-check" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
                <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
              </svg>
              <div className='text-primary pl-5 flex flex-col justify-center'>
                <h4 className='text-2xl lg:text-3xl mb-0 lg:mb-2' >Take the test</h4>
                <p className='text-md' >Find out which anime character you resemble</p>
              </div>
            </div>
            <div className='bg-white p-4 lg:p-6 rounded shadow-lg shadow-primary/30 flex mt-3'>
              <svg xmlns="http://www.w3.org/2000/svg" height="auto" className="bi bi-person-plus-fill" viewBox="0 0 16 16">
                <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                <path fillRule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
              </svg>
              <div className='text-primary pl-5 flex flex-col justify-center'>
                <h4 className='text-2xl lg:text-3xl mb-0 lg:mb-2' >Meet people</h4>
                <p className='text-md' >Browse through other users&apos; profiles</p>
              </div>
            </div>
            <div className='bg-white p-4 lg:p-6 rounded shadow-lg shadow-primary/30 flex mt-3'>
              <svg xmlns="http://www.w3.org/2000/svg" height="auto" fill="currentColor" className="bi bi-chat-heart" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M2.965 12.695a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2Zm-.8 3.108.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125ZM8 5.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z"/>
              </svg>
              <div className='text-primary pl-5 flex flex-col justify-center'>
                <h4 className='text-2xl lg:text-3xl mb-0 lg:mb-2' >Chat</h4>
                <p className='text-md' >If you both like each other, It&apos;s a UWU!</p>
              </div>
            </div>
          </div>
          <div className="mockup-phone rounded-[40px] lg:rounded-[50px]">
            <div className="camera"></div>
            <div className="display">
              <div className="artboard artboard-demo lg:w-[284px] lg:h-[600px] w-[213px] h-[450px] mb-[-15px]">
                <video
                autoPlay
                loop
                playsInline
                muted
                className='mt-[-20px]'
                type="video/quicktime" >
                  <source src={videoF} /></video>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="comments" className="text-center mt-12 lg:mt-40 z-20 max-w-full overflow-hidden aparece">
        <h3 className='text-3xl'>User opinions</h3>
        <Carousel slides={slides} />
      </section>

      <section id='team' className="max-w-screen-lg m-auto mt-12 lg:mt-40 relative p-10 lg:p-0 aparece">
        <div className="absolute w-full h-full">
          <img src={heart} alt="gráficos decorativos" className='atras absolute min-w-fit left-[-100px] top-[-200px] heartTeam rotate-[330deg]' />
        </div>
        <h3 className='text-3xl mb-12'>Team:</h3>
        <div className='flex flex-wrap max-md:flex-col md:flex-nowrap justify-center md:justify-between max-md:items-center'>
          <div className="card max-w-[250px] lg:max-w-[300px] shadow-xl shadow-primary/30 mr-3 bg-base-100/90 rounded-2xl overflow-hidden">
            <figure><img src={amanda} alt="avatar de Amanda"className='w-full' /></figure>
            <div className="card-body">
              <h4 className="card-title">Amanda</h4>
              <p>Co-founder</p>
              <p className='text-sm'>`No matter how hard or how impossible it is, never lose sight of your goal.`</p>
            </div>
          </div>
          <div className="card max-w-[250px] lg:max-w-[300px] shadow-xl shadow-primary/30 mr-3 bg-base-100/90 my-5 md:my-0 rounded-2xl overflow-hidden">
            <figure><img src={alba} alt="avatar de Alba"className='w-full' /></figure>
            <div className="card-body">
              <h4 className="card-title">Alba</h4>
              <p>Co-founder</p>
              <p className='text-sm'>`Do... or do not. There is no try.`</p>
            </div>
          </div>
          <div className="card max-w-[250px] lg:max-w-[300px] shadow-xl shadow-primary/30 bg-base-100/90 rounded-2xl overflow-hidden">
            <figure><img src={jon} alt="avatar de Jon"className='w-full' /></figure>
            <div className="card-body">
              <h4 className="card-title">Jon</h4>
              <p>CTO</p>
              <p className='text-sm'>`A true master is an eternal student`</p>
            </div>
          </div>
        </div>
      </section>

      <section id='media' className="max-w-screen-lg m-auto mt-12 lg:mt-40 relative max-lg:p-10 aparece">
        <h3 className='text-3xl mb-12 text-center'>Interviews:</h3>
        <div className="flex max-sm:flex-wrap justify-center sm:justify-between">
          <div className='overflow-hidden'><a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=0PtjKPdrDFs"><img className='upScaleOnHover' src={vid1} alt="vídeo Comedy-Con Youtube" /></a></div>
          <div className="overflow-hidden sm:mx-2 max-sm:my-7"><a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=ozQK7hjm5oQ"><img className='upScaleOnHover' src={vid2} alt="vídeo UPM Youtube" /></a></div>
          <div className='overflow-hidden'><a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=IX3zq1dwmcQ&t=2218s"><img className='upScaleOnHover' src={vid3} alt="vídeo Radio Nakama Youtube" /></a></div>
        </div>
        <h3 className='text-3xl mb-12 mt-12 text-center'>Articles about Freakit:</h3>
        <div className='grid grid-cols-2 md:grid-cols-3 max-w-lg gap-10 m-auto mt-10 justify-items-center'>
          <a target="_blank" rel="noreferrer" href="https://www.flooxernow.com/noticias/freakit-app-ligar-otakus-que-saturado-enorme-volumen-descargas_2022101263467b7c71418d000155f1d3.html"><div className='upScaleOnHover bg-white rounded p-2 aspect-square flex items-center max-w-[145px]'><img src={logo1} alt="logo flooxer" /></div></a>
          <a target="_blank" rel="noreferrer" href="https://notiziein.it/freakit-tinder-otaku-237368"><div className='upScaleOnHover bg-white rounded p-2 aspect-square flex items-center max-w-[145px]'><img src={logo2} alt="logo notizie in" /></div></a>
          <a target="_blank" rel="noreferrer" href="https://www.anime2you.de/news/611398/freakit-neue-otaku-dating-app/"><div className='upScaleOnHover bg-white rounded p-2 aspect-square flex items-center max-w-[145px]'><img src={logo3} alt="logo anime2you" /></div></a>
          <a target="_blank" rel="noreferrer" href="https://www.elconfidencial.com/tecnologia/2022-10-16/freakit-tinder-espanol-frikis-otakus_3505706//"><div className='upScaleOnHover bg-white rounded p-2 aspect-square flex items-center max-w-[145px]'><img src={logo4} alt="logo el confidencial" /></div></a>
          <a target="_blank" rel="noreferrer" href="https://blogs.20minutos.es/el-blog-de-lilih-blue/tag/freakit/"><div className='upScaleOnHover bg-white rounded p-2 aspect-square flex items-center max-w-[145px]'><img src={logo5} alt="logo 20 minutos" /></div></a>
          <a target="_blank" rel="noreferrer" href="https://elcomercio.pe/tecnologia/actualidad/freakit-la-nueva-aplicacion-de-citas-que-pretende-ser-el-tinder-de-los-otakus-app-espana-mexico-usa-noticia/"><div className='upScaleOnHover bg-white rounded p-2 aspect-square flex items-center max-w-[145px]'><img src={logo6} alt="logo el comercio" /></div></a>
        </div>
      </section>
    </div>
  )
}

export default AppEn
