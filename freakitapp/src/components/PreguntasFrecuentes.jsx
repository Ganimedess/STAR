
const PreguntasFrecuentes = () => {
  return (
    <div>
      <section className="textos-legales">
            <h1>Preguntas frecuentes</h1>
            <p className="text-2xl font-bold">¿En qué plataformas está disponible Freakit!?</p>
            <p>Freakit! está disponible en <a href="https://apps.apple.com/es/app/freakit/id6446035400" target="_blank">AppleStore</a> y <a href="https://play.google.com/store/apps/details?id=com.freakit.dev&hl=es_419&gl=US" target="_blank">PlayStore</a></p>
            <p className="text-2xl font-bold">¿En qué países está disponible?</p>
            <p>Freakit! está disponible actualmente en España. Proximamente estará disponible en Latinoamérica.</p>
            <p className="text-2xl font-bold">¿Pueden entrar menores de edad en Freakit!?</p>
            <p>No, en Freakit! solamente pueden entrar personas mayores de edad (+18)</p>
            <p className="text-2xl font-bold">¿Se puede utilizar Freakit! para buscar amistad?</p>
            <p>Sí, Freakit! es una aplicación destinada a que otakus se conozcan entre si, tú puedes decidir qué buscas (amistad, relación, etc…)</p>
            <p className="text-2xl font-bold">Me aparece que el aforo está completo.</p>
            <p>Esto puede ser por diferentes motivos como por ejemplo problemas de conexión o por tu dispositivo móvil.</p>
            <p className="text-2xl font-bold">No está disponible para mi dispositivo o no me aparece en la PlayStore.</p>
            <p>
                Esto puede deberse a varias razones:
                <ul>
                    <li>La vinculación de tu cuenta de Google. Puede ser que la configuración de tu cuenta de Google no esté completada con tu fecha de nacimiento o que al contrario seas menor de edad y por eso no te deje acceder.</li>
                    <li>Tu dispositivo no cumple con los requerimientos de Freakit!.</li>
                    <li>Freakit! todavía no está disponible en tu país.</li>
                </ul>
            </p>
        </section>
    </div>
  )
}

export default PreguntasFrecuentes