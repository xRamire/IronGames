const router = require("express").Router()
const User = require("../models/User.model")


// LISTA USERS
router.get("/all", (req, res) => {
    User.find()
        .then(allUsers => res.json(allUsers))
        .catch(err => res.json({ err, errMessage: "Problem finding Users" }))
})


//  PERFILES GENERAL

router.get("/profile/:id", (req, res) => {
    const { id } = req.params

    User.findById(id)
        .then(theUser => res.json(theUser))
        .catch(err => res.json({ err, errMessage: "Problem searching this user" }))
})


// EDIT

router.put("/edit", (req, res) => {

    const { id } = req.query
    const { password, email, image } = req.body

    User.findByIdAndUpdate(id, { password, email, image }, { new: true })
        .then((user) => res.json({ user }))
})

// DELETE

router.delete("/delete", (req, res) => {

    const { id } = req.query

    User.findByIdAndDelete(id)
        .then(info => res.json({ info }))
        .catch(err => res.json({ err }))
})





//  PERFIL propio

router.get("/my-profile", (req, res) => {
    
    const currentUser = req.session.currentUser;
    const id = currentUser._id

    User.findById(id)
        .then(theUser => res.json(theUser))
        .catch(err => res.json({ err, errMessage: "Problem searching this user" }))
})






module.exports = router