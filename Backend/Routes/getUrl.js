const {urlMapping}  =require('../Controllers')

module.exports = function(app){
    app.get("/g/:url" ,urlMapping.findOne)
}