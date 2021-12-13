const router = require("express").Router()
const Game = require("../models/Game.model")


router.get("/all", (req, res) => {
    Game.find()
        .then(allGames => res.json(allGames))
        .catch(err => res.status(500).json({ err, errMessage: "Problem finding Games" }))
})

router.get("/game/:id", (req, res) => {
    const { id } = req.params

    Game.findById(id)
        .then(theGame => res.json(theGame))
        .catch(err => res.status(500).json({ err, errMessage: "Problem searching this game" }))
})

router.get("/game/details/:id", (req, res) => {
    const { id } = req.params

    Game.findById(id)
        .then(theGame => res.json(theGame))
        .catch(err => res.status(500).json({ err, errMessage: "Problem searching this game" }))
})

router.post("/new", (req, res) => {
    const { title, description, genre, creators, imageUrl, github, date, gameUrl } = req.body

    console.log(req.body)

    Game.create({ title, description, genre, creators, imageUrl, github, date, gameUrl })
        .then(newGame => res.json(newGame))
        .catch(err => res.status(500).json({ err, errMessage: "Problem creating Game" }))
})

router.put("/edit/:_id", (req, res) => {
    const { _id } = req.params
    const { title, description, genre, creators, imageUrl, github, date, gameUrl } = req.body

    Game.findByIdAndUpdate(_id, { title, description, genre, creators, imageUrl, github, date, gameUrl }, { new: true })
        .then(updatedGame => res.json(updatedGame))
        .catch(err => res.status(500).json({ err, errMessage: "Problem editing Game" }))
})

router.delete("/delete/:id", (req, res) => {
    const { id } = req.params

    Game.findByIdAndDelete(id)
        .then(deletedGame => res.json({ deletedGame }))
        .catch(err => res.status(500).json({ err, errMessage: "Problem deleting game" }))
})

module.exports = router