// dependencies


function notFoundHandler(req, res) {
    res.status(404).send("404 Page Not Found!")

}

module.exports = {
    notFoundHandler, 
}