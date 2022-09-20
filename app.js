const express = require('express');
const app = express();

const db = require('./Backend/Models');

// IIFE function 
(async () => {
    await db.sequelize.sync();
})();

app.use(express.json())

require('./Backend/Routes/createUrl')(app)
require('./Backend/Routes/serverCheck')(app)
require('./Backend/Routes/getUrl')(app)

app.listen("8081",() => {console.log("app started in 8081");})