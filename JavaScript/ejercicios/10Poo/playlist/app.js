/*
1-Crea un objeto que se llame Song que contenga título, grupo, duración y valoración (0-5 estrellas), y a continuación:
2-Crea un método en el objeto que se print() que imprima lo siguiente: "La canción <nombre> me encanta y en Apple sólo le dan <valoracion> estrellas.
3-Crea un objeto Playlist que contendrá un array de objetos song, este objeto Playlist tendrá un método addSong() que recibirá un objeto Song y lo añadirá al array de canciones que almacena.
4-En el objeto Playlist crea un método que se llame getDuration() que devolverá la duración total del disco, que tendrá que calcular como la suma de la duración de todas las canciones.
5-En el objeto Playlist crea un método que se llame removeSong() que permita eliminar un objeto Song del array.
6-En el objeto Playlist crea un método shuffle() que devuelva una lista de las canciones desordenadamente con respecto al orden original según el que se fueron insertando las canciones. Debe ser diferente cada vez.
7-En el objeto Playlist crea un método nextSong() que devuelva la siguiente canción que se va a reproducir, en función de si ha sido invocado el método shuffle() o no se devolverá la siguiente canción en el array o una canción aleatoria.
8-En el objeto Playlist crea un método topRating() que devuelva un array ordenado de las cinco canciones mas valoradas
9-En el objeto Playlist crea un método top() que devuelva una array ordenado de los 5 grupos que más canciones tienen almacenadas en la Playlist.
0-En el objeto Playlist crea un método orderByDuration() que devuelva un array ordenado con todas las canciones que tiene almacenadas de mayor a menor duración.*/

class Song {
    constructor(titulo, grupo, duracion, valoracion) {
        this.titulo = titulo;
        this.grupo = grupo;
        this.duracion = duracion;
        this.valoracion = valoracion;
    }
    print() {
        console.log(`La cancion ${this.titulo} me encanta y en Apple sólo le dan ${this.valoracion} estrellas`);
    }
    getDuration() {
        return this.duracion;
    }
    getTitle() {
        return this.titulo;
    }
}

class Playlist {
    constructor(songList = []) {
        this.songList = songList;
    }
    addSong(song) {             //añade una cancion
        this.songList.push(song);
    }
    addSongs(songs) {
        songs.forEach(song => { //Añade un array de canciones
            /*  this.songList.push(song); */
            this.addSong(song)
        })
    }
    getTotalDuration() {

        let durationInMins = 0;
        for (let i = 0; i < this.songList.length; i++) {
            durationInMins = durationInMins + this.songList[i].getDuration();
        }
        return durationInMins;
    }
    removeSong(songTitle) {

        /* for (let i = 0; i < this.songList.length; i++) {
            if (songTitle === this.songList[i].getTitle()) {
                this.songList.splice(i, 1)
            }
        }//No hace falta retornarlo xq cuando miremos el array ya no tendrá el elemento */

        //igual pero con forEach
        //const tituloCanciones = this.canciones.forEach((element, index) => {
        //   if (element.titulo === tituloCancion) {
        //      this.songList.splice(index, 1);
        //    }
        //})

        //----Otra forma de hacerlo mas eficiente sobretodo si tenemos muchas canciones
        //xq asi no tiene que recorrer todo el array cada vez.
        //y tampoco haria falta el método getTitle de la clase Song:
        //mapeamos el array de objetos para encontrar titulos de canciones
        const songToRemove = this.songList.map(song => song.getTitle());
        //despues usamos indexOf para saber el indice de la canción con el título proporcionado
        songToRemove.indexOf(songTitle);
        //Finalmente usamos .splice para eliminar el objeto en el indice obtenido
        this.songList.splice(songToRemove, 1)
    }
    shuffle(songList) {
        /*  //solución rosa
         let random = this.songs.sort(() => .5 - Math.random()).slice(0, this.songs.length)
         //acceder al print de la clase song
         return random; */

        let oldElement;
        for (let i = songList.length - 1; i > 0; i--) {
            //obtenemos un índice aleatorio
            let randomIndex = Math.floor(Math.random() * (i + 1));
            //intercambiamos el actual por el random
            oldElement = this.songList[i];
            this.songList[i] = this.songList[randomIndex];
            this.songList[randomIndex] = oldElement;
        }
        return this.songList;
    }
    nextSong(playingTitleSong) {
        //mapeamos para listar todos lo títulos. Guardamos un array de todos los títulos, en la variable
        const allTitles = this.songList.map(song => song.getTitle());
        //En ese array de titulos buscamos el índice de la canción que está sonando
        const nowPlaying = allTitles.indexOf(playingTitleSong);
        //retornamos el título de la canción siguiente:
        //si es la última
        if (nowPlaying === this.songList.length - 1) {
            //reproduce la 1ª de nuevo
            return this.songList[0].getTitle();
        } else {//si no, la siguiente en la lista
            return this.songList[nowPlaying + 1].getTitle();
        }

    }
    /* top() {

    const list = [];
   // contar numero de canciones por grupo
   for (let i = 0; i < this.songs.length; i++) {
   if (list.includes(this.songs[i].grupo)) {
   list.this.songs[i].grupo = list.songs[i].grupo + 1;
   } else {
   list.push({ grupo: this.songs[i].grupo, total: 1 })
   }
   }
   // ordenar list de mayor a menor
   list.sort(function(a, b) {
   return b.total - a.total;
   });
   return list.slice(0, 5);
   } */
    orderByDuration() {
        //aplicacion del método sort sin mas
        /* this.songList.sort((a, b) => {
            if (a.duracion < b.duracion) {
                return 1;
            }
            if (a.duracion > b.duracion) {
                return -1;
            }
            return 0;
        }); */
        //seria lo mismo pero resumido:
        this.songList.sort((a, b) => {
            return b.duracion - a.duracion//asi ordeno de > a <; de < a > seria al revés, a.dur - b.dur
        });
    }
}

//1 creo 4 canciones (objetos clase Song)
const cancion1 = new Song('My Way', 'Frank Sinatra', 6, 2);
const cancion2 = new Song('La Flaca', 'Jarabe de Palo', 4, 3);
const cancion3 = new Song('Hotel California', 'The Eagles', 7, 4);
const cancion4 = new Song('London Calling', 'The Clash', 5, 5);
//2
cancion1.print();
//3
const lista1 = new Playlist();
lista1.addSongs([cancion1, cancion2, cancion3, cancion4]);
console.log(lista1);
//4
console.log(lista1.getTotalDuration());
//5
let lista2 = new Playlist([cancion1, cancion2, cancion3, cancion4]);
lista2.removeSong('My Way');
console.log(lista2);
//6
lista1.shuffle([cancion1, cancion2, cancion3, cancion4]);
console.log(lista1);
//7
let nextPlaying = lista1.nextSong('London Calling');
console.log(nextPlaying);
//8

//9

//10
lista1.orderByDuration();
console.log(lista1);



