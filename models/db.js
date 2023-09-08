const Sequelize = require('sequelize');

const sequelize = new Sequelize('postapp', 'root', 'guga2004', {
    host:'localhost',
    dialect: 'mysql'
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}