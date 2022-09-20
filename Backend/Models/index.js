const configs = require('../../db-configs')
const Sequelize = require('sequelize');

const sequelize = new Sequelize(configs.DATABASE, configs.USER, configs.PASSWORD, {
    host : configs.HOST,
    dialect : configs.DIAELECT
});

const db = {}

db.sequelize = sequelize;

db.models = {}

db.models.UrlMapping = require('./urlMapping')(sequelize, Sequelize.DataTypes);

module.exports = db;