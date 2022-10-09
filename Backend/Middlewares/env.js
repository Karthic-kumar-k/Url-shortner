require("dotenv").config()

module.exports = function getEnv() {
    const environment = process.env.ENV

    if(environment === "PRODUCTION") return "www.tiny.in";
    else return "localhost:8081"
}