module.exports = {
    myLogger: function (req, res, next) {
        console.log('LOGGED')
        next()
    }   
}
