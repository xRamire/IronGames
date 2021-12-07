const router = require("express").Router()
const Review = require("../models/Review.model")


router.get("/all", (req, res) => {
    Review.find()
        .then(allGames => res.json(allGames))
        .catch(err => res.json({ err, errMessage: "Problem finding Games" }))
})

// router.get("/review/:id", (req, res) => {
//     const { id } = req.params

//     Review.findById(id)
//         .then(theReview => res.json(theReview))
//         .catch(err => res.json({ err, errMessage: "Problem searching this review" }))
// })


router.post("/new", (req, res) => {
    const { comment, game, rating } = req.body

    Review.create({ comment, game, rating })
        .then(newReview => res.json(newReview))
        .catch(err => res.json({ err, errMessage: "Problem creating Game" }))
})

router.put("/edit/:id", (req, res) => {
    const { id } = req.params
    const { comment, game, rating } = req.body

    Review.findByIdAndUpdate(id, { comment, game, rating }, { new: true })
        .then(updatedReview => res.json(updatedReview))
        .catch(err => res.json({ err, errMessage: "Problem editing Review" }))
})

router.delete("/delete/:id", (req, res) => {
    const { id } = req.params

    Review.findByIdAndDelete(id)
        .then(deletedReview => res.json({ deletedReview }))
        .catch(err => res.json({ err, errMessage: "Problem deleting review" }))
})

module.exports = router