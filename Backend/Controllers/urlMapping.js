const { models : {UrlMapping}} = require ('../Models')
const crypto = require('crypto');
require("dotenv").config()
const getenv = require('../Middlewares/env')


module.exports = {

    create : async(req, res) =>{
        if(req.body.url){
            const {url} = req.body;
            
            let algorithm = process.env.ALGORITHM
            let transformedUrl = crypto.createHash(algorithm).update(url).digest("hex");
            let transformedUrlChopped = transformedUrl.slice(0,6);

            let resMysql = await UrlMapping.create({
                                transformedUrl : transformedUrlChopped.toString(),
                                actualUrl : url
                            });
            console.log(resMysql);
            res.send("Success. Your Url is " + getenv() + "/g/" + transformedUrlChopped);
        }
        else{
            res.send("Error while inserting");
        }
    } ,

    findOne : async(req, res) => {
        var referenceId = req.params.url;
        var condition = { where: { transformedUrl: referenceId } };
        let resUrl = await UrlMapping.findOne((condition));
        res.redirect(301,"https://"+resUrl.actualUrl)
    }
    
}
