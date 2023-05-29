/*import {Sequelize} from "sequelize";*/

const Sequelize = require('sequelize');
const sequelize = new Sequelize('CRUD', 'root', '131103', {dialect: "mysql", host: 'localhost'});

sequelize.authenticate().then(()=> {
    console.log("Connection has been stablised successfully.");
}).catch(err => {
    console.log("Unable to connect to the database" , err);
})

module.exports = sequelize;
