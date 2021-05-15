const Rock = require("../models/rock.model")
module.exports.findAllRocks = (req, res) => {
    Rock.find()
        .then(allRocks => res.json({ rocks: allRocks }))
        .catch(err =>res.json({message: "did not work out there", error: err}))
}
module.exports.createRock = (req,res) => {
    Rock.create(req.body)
        .then(newRock => res.json({ rock: newRock }))
        .catch(err => res.json({message: "did not work out there", error:err}))
}

// const Rock = require('../models/rock.model');

// module.exports.findAllRock = (req, res) => {
//     Rock.find()
//         .then(allRock => res.json({ users: allRock }))
//         .catch(err => res.json({ message: 'Something went wrong', error: err }));
// }

// // module.exports.findOneSingleUser => (req, res) => {
// //     User.findOne({ _id: req.params.id })
// //         .then(oneSingleUser => res.json({ user: oneSingleUser }))
// //         .catch(err => res.json({ message: 'Something went wrong', error: err }));
// // }

// module.exports.createNewRock = (req, res) => {
//     Rock.create(req.body)
//         .then(newRock => res.json({ user: newRock }))
//         .catch(err => res.json({ message: 'Something went wrong', error: err }));
// }
// // module.exports.updateExistingUser = (req, res) => {
// //     User.findOneAndUpdate(
// //         { _id: req.params.id },
// //         req.body,
// //         { new: true, runValidators: true }
// //     )
// //         .then(updatedUser => res.json({ user: updatedUser }))
// //         .catch(err => res.json({ message: 'Something went wrong', error: err }));
// // }

// // module.exports.deleteAnExistingUser = (req, res) => {
// //     User.deleteOne({ _id: req.params.id })
// //         .then(result => res.json({ result: result }))
// //         .catch(err => res.json({ message: 'Something went wrong', error: err }));
// // }