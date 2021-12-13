const router = require("express").Router()
const User = require("../models/User.model")
const { isLoggedIn, checkRoles } = require("../middlewares/index")
const bcrypt = require("bcrypt")
const bcryptSalt = 10

router.post('/signup', (req, res) => {

    const { username, password, email } = req.body

    User
        .findOne({ username })
        .then(user => {

            if (user) {
                res.status(400).json({ code: 400, message: 'Username already exixts' })
                return
            }

            const salt = bcrypt.genSaltSync(bcryptSalt)
            const hashPass = bcrypt.hashSync(password, salt)

            User
                .create({ username, password: hashPass, email })
                .then((user) => res.status(200).json(user))
                .catch(err => res.status(500).json({ code: 500, message: 'DB error while creating user', err: err.message }))
        })
        .catch(err => res.status(500).json({ code: 500, message: 'DB error while fetching user', err: err.message }))
})


router.post('/login', (req, res) => {

    const { username, password } = req.body

    User
        .findOne({ username })
        .then(user => {

            if (!user) {
                res.status(401).json({ code: 401, message: 'Username not registered' })
                return
            }

            if (bcrypt.compareSync(password, user.password) === false) {
                res.status(401).json({ code: 401, message: 'Incorrect password' })
                return
            }

            req.session.currentUser = user
            console.log(req.session.currentUser)
            res.json(req.session.currentUser)
        })
        .catch(err => {console.log(err), res.status(500).json({ code: 500, message: 'DB error while fetching user', err })})
})


router.get('/logout', isLoggedIn, (req, res) => {
    console.log(req.session.currentUser)
    req.session.destroy((err) => res.status(200).json({ code: 200, message: 'Logout successful' }));
})

router.get("/isloggedin", (req, res) => {
    req.session.currentUser ? res.json(req.session.currentUser) : res.status(401).json({ code: 401, message: 'Unauthorized' })
})

router.put("/edit", (req, res) => {

    const { id } = req.query
    const { password, email, image } = req.body

    User.findByIdAndUpdate(id, {password, email, image}, {new: true})
        .then((user) => res.json({user}))
})

router.delete("/delete", (req, res) => {

    const {id} = req.query

    User.findByIdAndDelete(id)
        .then(info => res.json({info}))
        .catch(err => res.json ({err}))
})

module.exports = router