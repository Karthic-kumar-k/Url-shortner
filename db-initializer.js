const db = require('./Backend/Models');

(async () => {
    await db.sequelize.sync();
})(); 

// (async function dbSync (){
//     await db.sequelize.sync();
// })();

//dbSync();