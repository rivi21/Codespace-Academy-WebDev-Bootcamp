//localStorage:

//guarda cadenas de texto tipo (clave, valor)
//"set" está guardando datos
//"get" obteniendo datos

//VIP NO GUARDAR INFO DELICADA, usuarios, contraseñas, etc...

//Provee acceso al almacenamiento de la sesión o al almacenamiento local
//para un dominio particular, permitiendo añadir,modificar, o eliminar elementos
//almacenados

//El almacenamiento máximo será, depende del navegador, de unos 5 MB

//Ejemplo 1:

/* const userName = 'Javi';
localStorage.setItem("userName", userName);
//para verlo vamos al inspector y pinchamos almacenamiento/almacenamiento local
sessionStorage.setItem("userName", userName);
const userNameLocalStorage = localStorage.getItem("userName");
console.log(userNameLocalStorage);

//para borrarlo
localStorage.removeItem("userName"); */

const btnBotones = document.querySelector('#btnbotones')
const divBotones = document.querySelector('#divBotones');
const fondo = document.querySelector('#fondo');

//Funciones autoejecutables o funciones IIFE(funciones de un solo uso)
(() => {
    //bloque de código
    btnBotones.addEventListener('click', agregarBotones);// los botones de colores se crean al cargar la página
    divBotones.addEventListener('click', delegacion);
})();


(function () {
    const color = localStorage.getItem("colorFondo");
    console.log(color);
    if (!color) {
        fondo.className = "bg-dark"
    } else {
        fondo.className = color
    }
})();

function delegacion(event) {
    event.preventDefault();
    /* console.log('Diste click en el contenedor de botones');// */
    console.log(event.target/* .classList */);//HACER PRUEBAS CON ESTOS LOG PARA VCER LO QUE SALE EN LA CONSOLA

    const colorBoton = event.target.classList[1];//detecta donde el usuario hace el click
    //ClassList es una propiedad de target y guarda sus clases, en este caso, [0] seria "btn y [1] seria btn-primary,secondary,success... el color.
    switch (colorBoton) {
        case "btn-primary":
            fondo.className = "bg-primary"
            localStorage.setItem("colorFondo", "bg-primary")
            break;
        case "btn-secondary":
            fondo.className = "bg-secondary"
            localStorage.setItem("colorFondo", "bg-secondary")
            break;
        case "btn-success":
            fondo.className = "bg-success"
            localStorage.setItem("colorFondo", "bg-success")
            break;
        case "btn-warning":
            fondo.className = "bg-warning"
            localStorage.setItem("colorFondo", "bg-warning")
            break;
        case "btn-danger":
            fondo.className = "bg-danger"
            localStorage.setItem("colorFondo", "bg-danger")
            break;

    }
}

function agregarBotones(event) {
    event.preventDefault();//Esto es para prevenir que cuando hagamos click en un boton se recargue la pagina
    divBotones.innerHTML = `

    <button class="btn btn-primary">Primary</button>
    <button class="btn btn-secondary">Secondary</button>
    <button class="btn btn-success">Success</button>
    <button class="btn btn-danger">Danger</button>
    <button class="btn btn-warning">Warning</button>
    `
}