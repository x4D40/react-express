module.exports = function(app) {

    app.get('/api/string/echo/:str', (req, res) => {
        res.send(req.params.str) // echo
    })

}