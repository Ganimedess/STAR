import ajustes from '../assets/images/iconos/ajustes_icono.png';
import texto from '../assets/images/iconos/verificacion-icono.png'
import editar from '../assets/images/iconos/editar_icono.png'
import info from '../assets/images/iconos/informacion_icono.png'
import melocotonAzul from '../assets/images/iconos/melocoton-azul_icono.png'
import melocotonMorado from '../assets/images/iconos/melocoton-morado_icono.png'

const Ayuda = () => {
  return (
    <div>
      <section className="textos-legales">
            <h1>Ayuda</h1>
            <p className="text-2xl font-bold">
                ¿Tienes alguna duda o algún problema con respecto al uso de Freakit!?
            </p>
            <p className="fs-5">
                En este apartado te ayudaremos a resolver todo aquello que te inquiete sobre la app.
            </p>
            <p className="text-2xl">Crear un perfil</p>
            <p>
                Para crear un perfil lo primero que tienes que hacer es registrarte en la app, esto puedes hacerlo de dos maneras: A través de un correo y una contraseña o a través de tu cuenta de Google o Apple.
                <br/>
                Deberás completar una serie de datos como nombre, correo y contraseña. Se enviará un correo de confirmación donde tendrás que verificar tu cuenta a través de un código que llegará a tu correo y deberás poner en la app una vez lo hayas copiado. A partir de este momento comenzarás a crear tu perfil donde se te solicitarán los siguientes datos: : nombre, fecha de nacimiento, génerp, orientación sexual, ¿qué buscas?, qué quieres que te aparezca y dónde quieres aparecer. Todo esto servirá para que luego el algoritmo de matches pueda mostrarte personas compatibles a ti. Estos datos pueden cambiarse en "Ajustes" <img className="icono-texto" src={ajustes} /> en tu perfil más adelante. A continuación comienza el test de personalidad. Este test de cuatro preguntas basado en las 16 personalidades te asignará el personaje de anime que tenga la misma personalidad que tú, podrás elegir entre personajes femeninos, masculinos o aleatorios. Siguiendo con la creación del perfil deberás seleccionar por lo menos tres gustos de seis que también más adelante podrás cambiar en la parte de edición de tu perfil. A continuación llega el momento de las fotos. Deberás subir o hacerte dos fotos al menos para que puedas continuar con tu perfil. Está completamente prohibido subir fotografías de desnudos, contenido sexual, violencia, o cualquier otra que pueda dañar la sensibilidad de los demás usuarios. Finalmente debes aceptar la localización (ten en cuenta que debe estar habilitada siempre que uses la app) y ¡felicidades!, tu perfil ya está creado. Si lo deseas puedes verificar tu perfil. Para esto deberás ir a la parte de "ajustes" <img className="icono-texto" src={ajustes} /> en tu perfil y acceder a "verifica tu perfil". Deberás hacerte dos fotos en ese momento con las poses que verás en el ejemplo. Estas fotografías serán verificadas por el equipo de Freakit! y, si eres tú aparecerá un icono de "verificado" <img className="icono-texto" src={texto} /> en tu perfil.
            </p>
            <p className="text-2xl">Modifica tu perfil</p>
            <p>
                En el menú inferior, a la derecha aparecerá el icono del perfil, ahí es donde podrás editar toda la información correspondiente a tu perfil. En el apartado »sobre mi» y clicando icono del “lápiz” <img className="icono-texto" src={editar} /> puedes editar información como: trabajo, dónde vives, estudios, cumpleaños, mascota y descripción. También podrás cambiar tus gustos y tus fotografías (también puedes eliminar dos de ellas). Finalmente dale a guardar ¡y listo!
            </p>
            <p className="text-2xl">Configuración de la cuenta</p>
            <p>
                En tu perfil podrás también modificar otras funcionalidades. Esto podrás hacerlo en la rueda de "ajustes" <img className="icono-texto" src={ajustes} /> arriba a la derecha dentro del apartado de tu perfil. En este apartado podrás cambiar tus preferencias como qué quieres que te aparezca, dónde quieres aparecer, preferencias de distancia o preferencias de edad. Puedes tambier cambiar tu contrasea, cerrar sesión o eliminar tu cuenta. ¡Importante! Si eliminas tu cuenta y quieres volver a crearla no tendrás ningún problema en volver a crearte dicha cuenta con el mismo correo. Si eliminas tu perfil ten en cuenta que se eliminarán todos los datos, match, conversaciones, etc. Aquí también podrás encontrar enlaces de interés sobre la aplicación, su uso y los derechos y deberes de los usuarios.
            </p>
            <p className="text-2xl">Home</p>
            <p>
                ¡Comienza lo divertido! En esta parte aparecerán los demás perfiles de lxs usuarixs. Como ves lo primero que te encontrarás será el personaje de anime que le ha tocado a la otra persona según el test de personalidad que ha hecho.  La ficha de usuario se compone de lo siguiente: Nombre, edad, kilometros a los que se encuentra de ti, sus gustos y en el caso de que se haya verificado aparecerá el icono pertinente. Hay cuatro botones: una “i” <img className="icono-texto" src={info} /> de información donde podrás ver qué personalidad es la de ese usuario. Otro en el que aparece »ver perfil» donde accederás al perfil de la persona y podrás ver toda la información de la misma. ¿Te gusta esa persona?, si es así deberás darle al “melocotón azul” <img className="icono-texto" src={melocotonAzul} /> y, si tú le gustas a esa persona… ¡Enhorabuena!, it's a UwU. Automáticamente podrás abrirle conversación en esa misma pantalla o si prefieres esperar, aparecerá en tu sala de chats. Si no te ha gustado esa persona, dale al “melocotón morado” <img className="icono-texto" src={melocotonMorado} /> . A continuación te saldrán otros perfiles.
            </p>
            <p className="text-2xl">Sala de chats</p>
            <p>
                En esta sala aparecerán todos los «UwU» que hayas tenido. En la parte superior podrás buscarlos por el nombre. Cuando entras al chat de alguien puedes hablar con esa persona, mandar gifs y si te aburres o pasa cualquier cosa, siempre podrás deshacer el "UwU" o denunciar a dicha persona. Si denuncias a esta persona, desde el equipo de Freakit! nos encargaremos de investigar la situación. Además, si denuncias esta persona no volverá a aparecer en tu home. Si no te hemos aclarado las dudas puedes enviar un email a: <a href="mailto:freakitapp@gmail.com" target="_blank">freakitapp@gmail.com</a> Estaremos encantadas de ayudarte! 🙂
            </p>
        </section>
    </div>
  )
}

export default Ayuda