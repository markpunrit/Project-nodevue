const { Chinese } = require('../models')

module.exports = {
    // get all blog
    async index(req, res) {
        try {
            const chineses = await Chinese.findAll()
            res.send(chineses)
        } catch (err) {
            res.status(500).send({
                error: 'The chineses information was incorrect'
            })
        }
    },
    // create blog
    async create(req, res) {
        console.log(JSON.stringify(req.body))
        try {
            const chinese = await Chinese.create(req.body)
            res.send(chinese.toJSON())
        } catch (err) {
            res.status(500).send({
                error: 'Create chinese incorrect'
            })
        }
    },
    // edit blog, suspend, active
    async put(req, res) {
        try {
            await Chinese.update(req.body, {
                where: {
                    id: req.params.chineseId
                }
            })
            res.send(req.body)
        } catch (err) {
            res.status(500).send({
                error: 'Update chinese incorrect'
            })
        }
    },
    
// delete blog
async remove(req, res) {
        try {
            const chinese = await Chinese.findOne({
                where: {
                    id: req.params.chineseId
                }
            })
            if (!chinese) {
                return res.status(403).send({
                    error: 'The chinese information was incorrect'
                })
            }
            await chinese.destroy()
            res.send(chinese)
        } catch (err) {
            res.status(500).send({
                error: 'The chinese information was incorrect'
            })
        }
    },
    // get blog by id
    async show(req, res) {
        try {
            const chinese = await Chinese.findByPk(req.params.chineseId)
            res.send(chinese)
        } catch (err) {
            console.log(err)
            res.status(500).send({
                error: 'The chinese information was incorrect'
            })
        }
    }
}
