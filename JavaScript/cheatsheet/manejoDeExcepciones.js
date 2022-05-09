//------Try-Catch

/* const value = null; */

/* console.log(value());//se para la ejecucuión */

//con try-catch conseguimos que no se pare la ejecución
/* try {
    value();
} catch (error) {
    //tiene dos props. name y message. Nombre del error y mens. descriptivo
    console.error(error)
    console.error(error.name)
    console.error(error.message)

}
console.log('Hola'); */

//-----------------------------

/* const valueNumber = function () {
    return 666;
}

try {
    const num = valueNumber();
    if (num === 666) {
        throw new Error('Aparta demonio');
    }
} catch (error) {
    console.error(error.name, error.message);
}
console.log('Continua la ejecucuión');
 */

//-----------------------------

/* const cat = { name: 'Gizmo', reed: 'negra' };

// Lo que vamos a hacer es preguntar  por un tipo de error especifico y el resto
//derivarlo fuerA.
//pREGUNTAMOS SI TIENE LA PROP RAZA

try {
    if (!cat.breed) throw new SyntaxError('Prop raza obligatoria')//NOTA:jugar escribiendo mal cat o breed para ver elerro r que nos da
    //Ponemos SyntaxError xq es el error que mejor le va. Es un error de 
    //sintaxis que no trae las props. necesarias
} catch (error) {
    console.error(error);
}
console.log('Continua la ejecución'); */

//-----------------------------

//Crear una función que compuebe que el objeto gato tenga la prop. raza 
//y que capture el error que tenemos contemplado

/* const cat = { name: 'Gizmo', reed: 'negra' }; //Si aqui no concuerda con la linea 59 entonces entra en el try-catch 
function checkCat() {
    try {
        if (!cat.breed) {
            throw new SyntaxError('Propiedad raza obligatoria');//creando el error de tipo sintáctico
        }
    } catch (error) {
        if (error instanceof SyntaxError) {
            //Preguntando si el error es de tipo sintáctico
            //manejamos los errores de tipo sintactico en esta condicion
            console.error('Info incompleta',error);// o error solo si queremos que lo 1º que escriba sea Syntax error
        } else {
            throw error; //rethrow--->si el error es de otro tipo lo lanzamos hacia fuera
        }
    }
}

try {
    checkCat();
} catch (error) {
    console.error('otros errores', error);
} */

//-------------------------------


/* let a = 8;
let b = 0; */

/* try {
    if (b === 0) {
        throw new Error('No se puede dividir por 0...');
    }
    console.log(`Division: ${a / b}`);
} catch (error) {
    console.error(error);
} */

/* function divideNums(a, b) {
    try {
        if (b === 0) {
            throw new Error('No se puede dividir por 0...');
        }
        return a / b;
    } catch (error) {
        console.error(error);
    }
}
const divideResult = divideNums(a, b) */
/* los log se usan para ver un error nosotros, pero en la app usaremos sobretodo
el return y después con el resultado que da la función, lo metemos en una variable
y ya haremos con ella lo que sea  */

let a = 8;
/* let b = 0; */

/* function divideNums(a, b) {
    try {
        if (typeof b !== Number) {
            throw new Error('Solo puedes usar numeros...');
        }
        console.log(`Division: ${a / b}`);
    } catch (error) {
        if (error instanceof TypeError) {
            console.error(error);
        } else {
            throw error;
        }

    }
}
try {
    divideNums(a, b)
} catch (error) {
    console.log('Otro error', error);
} */


//---------BONUS

//Crear nuestro propio objeto de error. Esto se hace cuando vamos a usar este error 
//en mas ocasiones. Se hace con clases, que ya las veremos

class laLiaoParda extends Error {
    name = 'laLiaoParda'
    message = 'Si, la he liao'
}

try {
    if (typeof b !== 'number') {
        throw new laLiaoParda();
    }
    console.log(`Division: ${a / b}`);
} catch (error) {
    console.error(error);
}

