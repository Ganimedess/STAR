
export class TareaModel {

    constructor(texto, check = false) {
        this.texto = texto
        this.fecha = new Date()
        this.key = this.fecha.getTime()
        this.check = check
    }

    completada(estado = true) {
        this.check = estado
    }

    modificar(texto) {
        this.texto = texto
    }

    static parse(tareaObj) {
        // Comprueba si se proporcionó un objeto válido
        if (!(typeof tareaObj === 'object' && tareaObj.texto && tareaObj.fecha && tareaObj.key)) {
            throw new Error('No se puede parsear la tarea porque el objeto no es válido.');
        }

        // Crea una nueva instancia de tareaModel con los datos del objeto proporcionado
        const tarea = new TareaModel(tareaObj.texto, tareaObj.check);

        tarea.fecha = new Date(Date.parse(tareaObj.fecha));
        tarea.key = tarea.fecha.getTime();


        return tarea;
    }
}