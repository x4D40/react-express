module.exports = function(app) {

    app.get('/api/string/reverse/:str', (req, res) => {
        const str = req.params.str;
        res.send(str.split("").reverse().join("")) // reverse string
    })

}