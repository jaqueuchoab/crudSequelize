const Sequelize = require('sequelize');
const database = require('./db.js');

const Produto = database.define('produto', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    preco: {
        type: Sequelize.DOUBLE
    },
    descricao: {
        type: Sequelize.STRING,
        allowNull: true
    }
});

module.exports = Produto;
