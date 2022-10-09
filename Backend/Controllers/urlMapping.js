require("dotenv").config();
const { models : {UrlMapping}} = require ('../Models');
const crypto = require('crypto');
const getenv = require('../Middlewares/env');
const {getErrorMessage} = require('../Middlewares/utils');

module.exports = {

    create : async(req, res) =>{
        if(req.body.url){
            const {url} = req.body;
            
            let algorithm = process.env.ALGORITHM
            let transformedUrl = crypto.createHash(algorithm).update(url).digest("hex");
            let transformedUrlChopped = transformedUrl.slice(0,6);

            UrlMapping.create({
                transformedUrl : transformedUrlChopped.toString(),
                actualUrl : url
              })
              .then(() => { res.json({ "url" : getenv() + "/g/" + transformedUrlChopped});})
              .catch(async (err) =>
                { 
                    if (err.errors[0].message === "actualUrl must be unique"){
                        var condition = { where: { transformedUrl: transformedUrlChopped.toString()} };
                        UrlMapping.findOne((condition)).then(() => {
                            res.json({ "url" : getenv() + "/g/" + transformedUrlChopped});
                        })
                        .catch((err) => res.json(getErrorMessage("findOne",err.toString())));
                    }
                    else{
                        res.json(getErrorMessage("create",err)); 
                    }
                });
        }
        else{
            res.json(getErrorMessage("create","Please enter url"));
        }
    } ,

    findOne : async(req, res, redisConnection) => {
        var referenceId = req.params.url;
        
        const value = await redisConnection.get(referenceId.toString());

        if(!value){

            var condition = { where: { transformedUrl: referenceId } };
            
            UrlMapping.findOne((condition)).then(async (resUrl) => {
                await redisConnection.set(referenceId.toString(), resUrl.actualUrl.toString());
                res.redirect(301,"https://"+resUrl.actualUrl);
            })
            .catch((err) => res.json(getErrorMessage("findOne",err.toString())));
        }
        else{
            res.redirect(301,"https://"+value)
        }
    }
    
}