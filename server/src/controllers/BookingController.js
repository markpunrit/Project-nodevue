const { Booking } = require('../models')

module.exports = {
    // get all blog
    async index(req, res) {
        try {
            const books = await Booking.findAll()
            res.send(books)
        } catch (err) {
            res.status(500).send({
                error: 'The books information was incorrect'
            })
        }
    },
    // create blog
    async create(req, res) {
        console.log(JSON.stringify(req.body))
        try {
            const book = await Booking.create(req.body)
            res.send(book.toJSON())
        } catch (err) {
            res.status(500).send({
                error: 'Create book incorrect'
            })
        }
    },
    // edit blog, suspend, active
    async put(req, res) {
        try {
            await Booking.update(req.body, {
                where: {
                    id: req.params.bookId
                }
            })
            res.send(req.body)
        } catch (err) {
            res.status(500).send({
                error: 'Update book incorrect'
            })
        }
    },
    
// delete blog
async remove(req, res) {
        try {
            const book = await Booking.findOne({
                where: {
                    id: req.params.bookId
                }
            })
            if (!book) {
                return res.status(403).send({
                    error: 'The book information was incorrect'
                })
            }
            await book.destroy()
            res.send(book)
        } catch (err) {
            res.status(500).send({
                error: 'The book information was incorrect'
            })
        }
    },
    // get blog by id
    async show(req, res) {
        try {
            const book = await Booking.findByPk(req.params.bookId)
            res.send(book)
        } catch (err) {
            console.log(err)
            res.status(500).send({
                error: 'The book information was incorrect'
            })
        }
    }
}
