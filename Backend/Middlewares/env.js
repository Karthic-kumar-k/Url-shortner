require("dotenv").config()


module.exports = function getEnv() {
    const environment = process.env.ENV

    if(environment === "PRODUCTION") return "www.smallurl.ly";
    else return "localhost:8081"
}