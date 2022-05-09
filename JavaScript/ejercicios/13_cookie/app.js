//----COOKIE-----

//Info enviada por un sitio web almacenada en el navegador del usuario,
//de manera que el sitio web puede consultar la actividad previa del navegador

//Para que?: Recordar accesos,Recordar usuarios,Conocer informacion sobre los hábitos de navegación

//Cookie    - puede almacenar aprox hasta 4 kb
//          - la info dura lo que el usuario haya determinado al crearlas

document.getElementById('crear').addEventListener('click', crear);
document.getElementById('mostrar').addEventListener('click', mostrar);
document.getElementById('modificar').addEventListener('click', modificar);
document.getElementById('eliminar').addEventListener('click', eliminar);

function crear() {
    document.cookie = "userName = Javi; expires= Friday 31 Dec 2021 12:00:00 utc; path=/; max.age= 60*60*24"
    //userName,expires, path, max.age son propiedades
    //expires y max.age son contradictorias se pone o una o la otra xq 'expires' dice que se eliminará la cookie a final de año(escribir en formato utc)
    //y max.age un día(segundos:minutos:horas)
    //si no quieres eliminarlas no se pone ninguna de las dos
    //El usuario siempre puede eliminarlas manualmente
    // estas son las props de las cookies: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie
}
function mostrar() {
    alert(document.cookie);
}
function modificar() {
    document.cookie = "userName = Javi; path=/; max.age= 60*60*24;"
}
function eliminar() {
    document.cookie = "userName = Javi; expires= Monday 22 Nov 2021 12:51:00 utc; path=/; max.age= 60*60*24"
}
