const express = require('express');
const app = express();
const db = require('./db-initializer');
const client = require('./redis-connection');
const conn = client();


(async () => {
    await conn.connect();
})();

app.use(express.json());

//Route Files
require('./Backend/Routes/createUrl')(app);
require('./Backend/Routes/serverCheck')(app);
require('./Backend/Routes/getUrl')(app, conn);

app.listen("8081",() => {console.log("app started in 8081");});