const router = require("express").Router()
const User = require("../models/User.model")
const { isLoggedIn, checkRoles } = require("../middlewares/index")


router.get("/all", (req, res) => {
    User.find()
        .then(allUsers => res.json(allUsers))
        .catch(err => res.status(500).json({ err, errMessage: "Problem finding Users" }))
})

router.get("/profile/:id", (req, res) => {
    const { id } = req.params

    User.findById(id)
        .then(theUser => res.json(theUser))
        .catch(err => res.status(500).json({ err, errMessage: "Problem searching this user" }))
})

router.put("/edit", (req, res) => {

    const { id } = req.query
    const { username, password, email, image, favs } = req.body

    User.findByIdAndUpdate(id, { username, password, email, image, favs }, { new: true })
        .then((user) => res.status(500).json({ user }))
})

router.delete("/delete", (req, res) => {

    const { id } = req.query

    User.findByIdAndDelete(id)
        .then(info => res.json({ info }))
        .catch(err => res.status(500).json({ err }))
})

router.get("/my-profile", isLoggedIn, (req, res) => {
    
    const currentUser = req.session.currentUser;
    const id = currentUser._id

    User.findById(id)
        .then(theUser => res.json(theUser))
        .catch(err => res.status(500).json({ err, errMessage: "Problem searching this user" }))
})

module.exports = router