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
        .populate('favs')
        .then(theUser => res.json(theUser))
        .catch(err => res.status(500).json({ err, errMessage: "Problem searching this user" }))
})

router.put("/edit/:_id", (req, res) => {

    const { _id } = req.params
    const { username, password, email, image, favs } = req.body

    User.findByIdAndUpdate(_id, { username, password, email, image, favs }, { new: true })
        .then((user) => res.status(200).json(user))
        .catch(err => res.status(500).json({ err, errMessage: "Problem editing Profile" }))

})

router.delete("/delete/:id",  (req, res) => {

    const { id } = req.params

    User.findByIdAndDelete(id)
        .then(info => res.json({ info }))
        .catch(err => res.status(500).json({ err }))
})

router.get("/my-profile", isLoggedIn, (req, res) => {
    
    const currentUser = req.session.currentUser;
    const id = currentUser._id

    User.findById(id)
        .populate('favs')
        .then(theUser => res.json(theUser))
        .catch(err => res.status(500).json({ err, errMessage: "Problem searching this user" }))
})

router.put("/favs/fav/:id", isLoggedIn, (req, res) => {

    const currentUser = req.session.currentUser
    const userId = currentUser._id


    const { id } = req.params
    const { favs } = req.body


    User.findByIdAndUpdate(userId, { $push: { favs: id } }, { new: true })
        .then(fav => res.json(fav))
        .catch(err => console.log(err))

})

router.put("/favs/unfav/:id", isLoggedIn, (req, res) => {

    const currentUser = req.session.currentUser
    const userId = currentUser._id

    const { id } = req.params
    const { favs } = req.body

    //DONE PULL PARA SACAR EL PUSH

    User.findByIdAndUpdate(userId, { $pull: { favs: id } }, { new: true })
        .then(unFav => res.json(unFav))
        .catch(err => console.log(err))

})



module.exports = router