const Author = require('../models/author.model');

module.exports.create = (req, res) => {
    Author.create(req.body)
    .then(newAuthor => {
        return res.json(newAuthor);
    }).catch(err => {
        return res.status(400).json(err);
    })
}

module.exports.getAll = (req, res) => {
    Author.find({})
    .then(allAuthors => {
        return res.json(allAuthors);
    }).catch(err => {
        return res.json(err);
    })
}

module.exports.getOne = (req, res) => {
    Author.findById({_id : req.params.id})
    .then (author => {
        return res.json(author);
    }).catch(err => {
        return res.json(err);
    })
}

module.exports.deleteOne = (req, res) => {
    Author.deleteOne({_id : req.params.id})
    .then (deletedAuthor => {
        return res.json(deletedAuthor);
    }).catch(err => {
        return res.json(err);
    })
}

module.exports.updateOne = (req, res) => {
    Author.updateOne({_id : req.params.id}, req.body, {runValidators: true})
    .then (updatedAuthor => {
        return res.json(updatedAuthor);
    }).catch(err => {
        return res.status(400).json(err);
    })
}