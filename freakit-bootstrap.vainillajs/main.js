

class HeaderTemplate extends HTMLElement {
    constructor() {
        super();
        //create shadow
        let shadow = this.attachShadow({mode: "open"});
        //create styles and append
        const linkElem = document.createElement("link");
        linkElem.setAttribute("rel", "stylesheet");
        linkElem.setAttribute("href", "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css");
        shadow.appendChild(linkElem);
        const linkElem2 = document.createElement("link");
        linkElem2.setAttribute("rel", "stylesheet");
        linkElem2.setAttribute("href", "styles.css");
        shadow.appendChild(linkElem2);
        //create structure and append
        this.headerBox = document.createElement("header");
        this.headerBox.className = "container"
        this.headerBox.innerHTML = `
                                    <nav class="row position-relative">
                                        <div class="col-sm-12 col-6 offset-6 offset-sm-0 text-center">
                                            <a href="/index.html"><img src="/assets/logo-freakit.png" alt="logo-freakit" class="logo-navegacion w-100"></a>
                                        </div>
                                        <div id="menu-hamburguesa" class="position-absolute">
                                            <button>
                                                <svg xmlns="http://www.w3.org/2000/svg"  fill="#65519b" class="bi bi-list" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                                                </svg>
                                            </button>
                                            <ul class="closed list-unstyled bg-light fs-5">
                                                <li><a href="/personalidades.html" class="dropdown-item py-2">Personalidades</a></li>
                                                <li><a href="/personajes.html" class="dropdown-item py-2">Personajes anime</a></li>
                                                <li><a href="#contacto" class="dropdown-item py-2">Contacto</a></li>
                                            </ul>
                                        </div>
                                    </nav>
                                    `
        shadow.appendChild(this.headerBox);

        //binding

    }

    connectedCallback () {
        const botonMenu = this.shadowRoot.querySelector("#menu-hamburguesa button");
        const dropdownMenu = this.shadowRoot.querySelector("#menu-hamburguesa ul")
        botonMenu.addEventListener("click", (e) => {
            dropdownMenu.classList.toggle("closed");
        })
    }
}
//define element -> (tag, class)
customElements.define("header-template", HeaderTemplate);



class FooterTemplate extends HTMLElement {
    constructor() {
        super();
        //create shadow
        let shadow = this.attachShadow({mode: "open"});
        //create styles and append
        const linkElem = document.createElement("link");
        linkElem.setAttribute("rel", "stylesheet");
        linkElem.setAttribute("href", "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css");
        shadow.appendChild(linkElem);
        const linkElem2 = document.createElement("link");
        linkElem2.setAttribute("rel", "stylesheet");
        linkElem2.setAttribute("href", "styles.css");
        shadow.appendChild(linkElem2);
        //create structure and append
        this.footerBox = document.createElement("footer");
        this.footerBox.className = "d-flex flex-wrap flex-column justify-content-center"
        this.footerBox.innerHTML = `
                                    <div class="d-flex justify-content-center align-items-center">
                                        <div class="icono-social me-2">
                                            <a href="https://www.tiktok.com/@freakit__" target="_blank">
                                                <img src="/assets/iconos/tiktok.png" alt="ir a tiktok" class="w-100">
                                            </a>
                                        </div>
                                        <div class="icono-social mx-2">
                                            <a href="https://www.instagram.com/freakitapp/?hl=es" target="_blank">
                                                <img src="/assets/iconos/insta.png" alt="ir a instagram" class="w-100">
                                            </a>
                                        </div>
                                        <div class="icono-social ms-2">
                                            <a href="mailto:freakitapp@gmail.com" target="_blank">
                                                <img src="/assets/iconos/mail.png" alt="enviar e-mail" class="w-100">
                                            </a>
                                        </div>
                                    </div>
                                    <div class="my-1 py-1"><!----------></div>
                                    <nav>
                                        <ul class="list-unstyled d-flex flex-wrap justify-content-center">
                                            <li class="me-2"><a href="/terminos-y-condiciones.html" class="text-decoration-none">Términos y Condiciones de uso</a></li>
                                            <li class="mx-2"><a href="/politica-privacidad.html" class="text-decoration-none">Política de Privacidad</a></li>
                                            <li class="mx-2"><a href="/reglas-comunidad.html" class="text-decoration-none">Reglas de la Comunidad</a></li>
                                            <li class="mx-2"><a href="/consejos-seguridad.html" class="text-decoration-none">Consejos de Seguridad</a></li>
                                            <li class="mx-2"><a href="/ayuda.html" class="text-decoration-none">Ayuda</a></li>
                                            <li class="mx-2"><a href="/personalidades.html" class="text-decoration-none">Personalidades</a></li>
                                            <li class="mx-2"><a href="/personajes.html" class="text-decoration-none">Personajes de anime</a></li>
                                            <li class="ms-2"><a href="/preguntas-frecuentes.html" class="text-decoration-none">Preguntas frecuentes</a></li>
                                        </ul>
                                    </nav>
                                    `
        shadow.appendChild(this.footerBox);
    }
}
//define element -> (tag, class)
customElements.define("footer-template", FooterTemplate);




