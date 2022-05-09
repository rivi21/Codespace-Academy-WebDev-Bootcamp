//Asincronia y sincronia

const datos = [
    {
        id: 1,
        title: 'Iron Man',
        year: 2008
    },
    {
        id: 2,
        title: 'Spiderman: Homecoming',
        year: 2017
    },
    {
        id: 3,
        title: 'Advengers: Endgame',
        year: 2019
    }
]

function getData() {
    return datos;
}

console.log('Esta llamada es la llamada sincrona de getData:', getData());

function getDataWithTimeout() {
    setTimeout(() => {
        return datos
    }, 1500)
}

console.log(`Esta es la llamada con timeout de getDataWithTimeout: ${getDataWithTimeout()}`);

function getDataWithPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(datos)
        }, 1500)
    })
}

console.log('Esta es la llamada a getDataWithPromise: ', getDataWithPromise());

getDataWithPromise()
    .then((data) => console.log(data));

//async/await

//const dataWithAwait = await getDataWithPromise();

async function fetchingData() {
    const dataWithAwait = await getDataWithPromise();
    console.log(dataWithAwait);
}

fetchingData();

//try/catch

async function fetchingDataWithTryCatch() {
    try {
        const dataWithAwait = await getDataWithPromise();
        console.log(dataWithAwait);
    } catch (error) {
        console.log(error);
    }
}

fetchingDataWithTryCatch();

const data2 = []
const getDataWithPromiseAndCondition = function () {
    return new Promise((resolve, reject) => {
        if (data2.length === 0) {
            reject(new Error('No existen datos'))
        }
        setTimeout(() => {
            resolve(data2)
        }, 1500)
    })
}

console.log(getDataWithPromiseAndCondition())