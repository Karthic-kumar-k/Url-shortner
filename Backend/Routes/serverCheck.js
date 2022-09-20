module.exports = function (app){
    app.get("/check" , (req, res) => {
        res.send("SERVER UP");
    })
}
