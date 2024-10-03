import bloater from './mutation/bloater.js';

console.log('starting');
//
const dataCOll = bloater();

const keepAlive = () => {
    setInterval(() => {
        console.log('timer: ', dataCOll.length);
    }, 10000);
}


keepAlive();