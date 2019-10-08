// Funão delay aciona o .then após 1s
const delay = (text) => new Promise(resolve => setTimeout( () => { resolve(text) }, 1000));

async function umPorSegundo() {    
    console.log(await delay('1s'));
    console.log(await delay('2s'));
    console.log(await delay('3s'));
}

umPorSegundo();
