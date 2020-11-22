module.exports = function(app) {
    app.get('/api/number/random', (req, res) => {
        res.send({num: Math.random()});
    })
}