const {urlMapping}  =require('../Controllers')

module.exports = function(app){
    app.post("/v1/createUrl" ,urlMapping.create)
}