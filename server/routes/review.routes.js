const router = require("express").Router()
const Review = require("../models/Review.model")


router.get("/all", (req, res) => {
    Review.find()
        .then(allGames => res.json(allGames))
        .catch(err => res.status(500).json({ err, errMessage: "Problem finding Games" }))
})

router.post("/new", (req, res) => {
    const { comment, game, rating } = req.body

    Review.create({ comment, game, rating })
        .then(newReview => res.json(newReview))
        .catch(err => res.status(500).json({ err, errMessage: "Problem creating Game" }))
})

router.put("/edit/:id", (req, res) => {
    const { id } = req.params
    const { comment, game, rating } = req.body

    Review.findByIdAndUpdate(id, { comment, game, rating }, { new: true })
        .then(updatedReview => res.json(updatedReview))
        .catch(err => res.status(500).json({ err, errMessage: "Problem editing Review" }))
})

router.delete("/delete/:id", (req, res) => {
    const { id } = req.params

    Review.findByIdAndDelete(id)
        .then(deletedReview => res.json({ deletedReview }))
        .catch(err => res.status(500).json({ err, errMessage: "Problem deleting review" }))
})

module.exports = router