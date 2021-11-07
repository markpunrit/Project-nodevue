const UserController = require('./controllers/UserController.js');
const UserAuthenController = require('./controllers/UserAuthenController');
const isAuthenController = require('./authen/isAuthenController')
const ChineseController = require('./controllers/ChineseController');4
const BookingController = require('./controllers/BookingController');
let multer = require("multer")

module.exports = (app) => {
    app.post('/user', UserController.create)
    app.put('/user/:userId', UserController.put)
    app.delete('/user/:userId', UserController.remove)
    app.get('/user/:userId', UserController.show)
    app.get('/users', isAuthenController, UserController.index)
    app.post('/login', UserAuthenController.login)
    app.post('/chinese', ChineseController.create)
    app.put('/chinese/:chineseId', ChineseController.put)
    app.delete('/chinese/:chineseId', ChineseController.remove)
    app.get('/chinese/:chineseId', ChineseController.show)
    app.get('/chineses',ChineseController.index)
    app.post('/book', BookingController.create)
    app.put('/book/:bookId', BookingController.put)
    app.delete('/book/:bookId', BookingController.remove)
    app.get('/book/:bookId', BookingController.show)
    app.get('/books',BookingController.index)
}