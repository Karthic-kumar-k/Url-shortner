const {urlMapping}  =require('../Controllers')

module.exports = async function(app, redisConnection){
    app.get("/g/:url" , (req, res) =>{
        return urlMapping.findOne(req, res, redisConnection)
    });
}