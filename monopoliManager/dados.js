class Dados extends HTMLElement {
    constructor() {
        super()
        this.shadow = this.attachShadow({ mode : 'open' })
        this.shadow.innerHTML = `<link rel="stylesheet" href="dados.css">
                            <div class="dado d1"><svg></svg></div>
                            <div class="dado d2"><svg></svg></div> <br>
                            <button class="roll">ROLL</button>`;

        this.roll = this.roll.bind(this)
        this.superRoll = this.superRoll.bind(this) 
    }

    connectedCallback() {
        this.shadow.querySelector('.roll').addEventListener('click', this.superRoll)
        this.d1 = this.shadow.querySelector('.d1 svg')
        this.d2 = this.shadow.querySelector('.d2 svg')
    }

    caras = {
        1 : '<circle cx="5em" cy="5em" r="1em" />',
        2 : '<circle cx="3em" cy="3em" r="1em" />'+
                    '<circle cx="7em" cy="7em" r="1em" />',
        3 : '<circle cx="2.7em" cy="2.7em" r="1em" />'+
                    '<circle cx="5em" cy="5em" r="1em" />'+
                    '<circle cx="7.3em" cy="7.3em" r="1em" />',
        4 : '<circle cx="3em" cy="3em" r="1em" />'+
                    '<circle cx="3em" cy="7em" r="1em" />'+
                    '<circle cx="7em" cy="3em" r="1em" />'+
                    '<circle cx="7em" cy="7em" r="1em" />',
        5 : '<circle cx="2.7em" cy="2.7em" r="1em" />'+
                    '<circle cx="2.7em" cy="7.3em" r="1em" />'+
                    '<circle cx="5em" cy="5em" r="1em" />'+
                    '<circle cx="7.3em" cy="2.7em" r="1em" />'+
                    '<circle cx="7.3em" cy="7.3em" r="1em" />',
        6 : '<circle cx="2.7em" cy="2em" r="1em" />'+
                    '<circle cx="2.7em" cy="5em" r="1em" />'+
                    '<circle cx="2.7em" cy="8em" r="1em" />'+
                    '<circle cx="7.3em" cy="2em" r="1em" />'+
                    '<circle cx="7.3em" cy="5em" r="1em" />'+
                    '<circle cx="7.3em" cy="8em" r="1em" />',
    }

    roll() {
        let num1 = Math.floor( Math.random() * 6 + 1 )
        let num2 = Math.floor( Math.random() * 6 + 1 )
        this.d1.innerHTML = this.caras[num1]
        this.d2.innerHTML = this.caras[num2]
        return(num1+num2)
    }
    superRoll() {
        let contador = 0
        let resultado
        this.d1.classList.add('gris')
        this.d2.classList.add('gris')
        this.roll()

        return new Promise((resolve) => {
            let intervalo = setInterval(() => {
                resultado = this.roll()
                contador++
                if(contador==5) {
                    clearInterval(intervalo)
                    this.d1.classList.remove('gris')
                    this.d2.classList.remove('gris')
                    resolve(resultado)
                }
            }, 100)
        })

    }
}
customElements.define('elemento-dados', Dados)

