/*Un altavoz tiene dos propiedades: el estado encendido que puede ser
* verdadero o falso, y la otra, el volumen que puede estar comprendido entre 0 y 100
*
* El altavoz tendra los siguientes metodos:
* 1.-Encender: establece el estado de encendido a verdadero y el volumen a 20
* 2.-Apagar: establece el estado de encendido a false y el volumen a 0
* 3.-getVolumen: devolvera el valor actual del volumen
* 4.-subirVolumen: incrementa en volumen en 1. Si ha llegado a valer 100 no hara nada
* 5.-bajarVolumen: decrementa el volumen en 1. Si ha llegado a 0 no hara nada
* 6.-establecerVolumen: recibe un valor entre 0 y 100 y establece ese valor como volumen
* 7.-mute: establece el volumen a 0
* 8.-print: imprime por pantalla: "El altavoz está <encendido/apagado> y su volumen es de <volumen>"
*/

class Speaker {
    constructor(name, state, volume) {
        this.name = name;
        this.volume = volume;
        this.state = state;
    }
    switchOn() {
        this.state = 'Encendido';
        this.volume = 20;
        /* return `Switched ON <> Volume: ${this.volume}` */
    }
    switchOff() {
        this.state = 'Apagado';
        this.volume = 0;
        /*  return; */
    }
    getVolume() {
        return this.volume;
    }
    increaseVolume() {
        if (this.volume < 100) {
            this.volume += 1;
        } /* return `Volume: ${this.volume}`; */
    }
    decreaseVolume() {
        if (this.volume > 0) {
            this.volume -= 1;
        }/*  return `Volume: ${this.volume}`; */
    }
    establishVolume(currentVolume) {
        this.volume = currentVolume;
        /*  return `Volume: ${this.volume}`; */
    }
    mute() {
        this.volume = 0;
        /* return `Volume: MUTED`; */
    }
    print() {
        if (this.state) {
            return `El altavoz está encendido y su volumen es de ${this.getVolume()}`;
        }
        return `The Speaker is OFF`;

    }
}
const stateSpeaker = new Speaker(true, 50);
/* 
console.log(stateSpeaker.establishVolume(40));
console.log(stateSpeaker.increaseVolume());*/
//stateSpeaker.switchOff();
console.log(stateSpeaker.print());

/* * 9.-completado esto, crear un surround 5.0 en los sigientes estados:
        -   front:          v50, encendido
        -   front.right     v30, encendido
        -   front-Left      v20,on
        -   rear.rigth      v0, off
        -   rear-left       v20, on
* 10.- Una vez esto, subir el volumen del rear-left en 5, 
        encender rear-rigth y establecer su volumen a 35
* 11.- Apagar todos los altavoces
* 12.- crear una clase home-cinema, capaz de manipular todos los altavoces */

//creo los cinco altavoces haciendo una instancia por altavoz
const front = new Speaker('front', true, 50);
const frontRight = new Speaker('frontRight', true, 30);
const frontLeft = new Speaker('frontLeft', true, 20);
const rearRight = new Speaker('rearRight', false, 0);
const rearLeft = new Speaker('rearLeft', true, 20);

//Aumento el volumen del trasero izquierdo en 5 unidades
for (let i = 0; i < 5; i++) {
    rearLeft.increaseVolume();
}
console.log(rearLeft);

//enciendo trasero derecho
rearRight.switchOn();
console.log(rearRight);

//y le subo el volumen a 35
for (i = 0; i < 15; i++) {
    rearRight.increaseVolume();
} console.log(rearRight);

//Apago todos
front.switchOff();
frontRight.switchOff();
frontLeft.switchOff();
rearRight.switchOff();
rearLeft.switchOff();
console.log(front);

//homeCinema

class HomeCinema {

    constructor(speakers = []) {
        this.speakers = speakers;
    }
    addSpeakers(speakerArray) { //metemos los altavoces en el array
        speakerArray.forEach(speaker => {
            this.speakers.push(speaker);
        })
        /* this.speakers = speakerArray; */
    }
    encender() {
        this.speakers.forEach(speaker => {//usar funciones flecha dentro de métodos xq hace referencia al "this" 
            //del objeto donde se está ejecutando, pero la función nombrada tiene su propio this, y al usarlo,
            //machaca el del objeto donde se ejecuta 
            speaker.switchOn();//  
        })
        return `Todos los altavoces están encendidos`
    }
    apagar() {
        this.speakers.forEach(speaker => {//usar funciones flecha dentro de métodos
            speaker.switchOff();
        })
        return `Todos los altavoces están apagados`
    }
}
const surround = new HomeCinema;
surround.addSpeakers([front, frontLeft, frontRight, rearLeft, rearRight]);
console.log(surround);
console.log(surround.encender());
console.log(surround);
console.log(surround.apagar());
console.log(surround);

