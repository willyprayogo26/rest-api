const { User } = require('../models')
const { bcrypt, jwt } = require('../helpers')

class UserController {
    static registerAdmin(req, res) {
        User.create({
            "email": req.body.email,
            "password": req.body.password,
            "role": 'admin'
        })
            .then(user => {
                res.status(201).json(user)
            })
            .catch(err => {
                res.status(500).json(err.errors[0].message)
            })
    }

    static register(req, res) {
        User.create({
            "email": req.body.email,
            "password": req.body.password,
            "role": 'user'
        })
            .then(user => {
                res.status(201).json(user)
            })
            .catch(err => {
                res.status(500).json(err.errors[0].message)
            })
    }

    static login(req, res) {
        User.findOne({
            where: {
                email: req.body.email
            }
        })
            .then(user => {
                if (user && bcrypt.comparePassword(req.body.password, user.password)) {
                    let token = jwt.jwtSign({
                        id: user.id
                    })
                    res.status(200).json({
                        id: user.id,
                        email: user.email,
                        role: user.role,
                        token: token
                    })
                } else {
                    res.status(400).json({
                        msg: 'Invalid email/password'
                    })
                }
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }

    static getAllUser(req, res) {
        User.findAll()
            .then(users => {
                res.status(200).json(users)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }

    static getUserById(req, res) {
        User.findByPk(req.params.id)
            .then(user => {
                if (user) {
                    res.status(200).json(user)
                } else {
                    res.status(404).json({
                        msg: 'User not found'
                    })
                }
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }

    static createUser(req, res) {
        User.create({
            "email": req.body.email,
            "password": req.body.password,
            "role": req.body.role
        })
            .then(user => {
                res.status(201).json(user)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }

    static updateUser(req, res) {
        User.update({
            "email": req.body.email
        }, {
                where: {
                    id: req.params.id
                }
            })
            .then(user => {
                if (user) {
                    if (user[0] === 1) {
                        res.status(200).json({
                            msg: 'Updated'
                        })
                    } else {
                        res.status(404).json({
                            msg: 'User not found'
                        })
                    }
                } else {
                    res.status(404).json({
                        msg: 'User not found'
                    })
                }
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }

    static deleteUser(req, res) {
        User.destroy({
            where: {
                "id": req.params.id
            }
        })
            .then(user => {
                if (user) {
                    res.status(200).json({
                        msg: 'Deleted'
                    })
                } else {
                    res.status(404).json({
                        msg: 'User not found'
                    })
                }
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }
}

module.exports = UserController