//Capturar los botoner de aumentar y disminuir
const resultado = document.getElementById('resultado');
const btnAumentar = document.querySelector('.btn-info');
const bntDisminuir = document.querySelector('.btn-danger');

let contador = 0;
//al boton aumentar le aplicamos un evento que escuche, de tipo 'click
btnAumentar.addEventListener('click', () => {
    console.log('Diste click en aumentar');
    contador++;
    resultado.textContent = contador
    //esta linea hace que aumente el resultado 
})
bntDisminuir.addEventListener('click', () => {
    console.log('Diste click en disminuir');
    if (contador === 0) {
        return contador = 0
    }
    contador--;
    resultado.textContent = contador
})
const btnDark = document.querySelector('.btn-dark');
const bgSuccess = document.querySelector('.bg-success');

