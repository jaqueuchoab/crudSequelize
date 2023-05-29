(async () => {
    const database = require('./db');
    const Produto = require('./produto');

    try {
        const resultado = await database.sync();
    } catch (error) {
        console.log('catch');
        console.log(error);
    }
})();