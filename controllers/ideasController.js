const User = require('../models/User')
const Idea  = require('../models/Idea')

const ideasController = {
    index: (req, res) => {
        var userId = req.params.userId
        User.find(userId).populate('ideas')
        .then((user) => {
            res.send(user.ideas)
        })
    },
    show: (req, res) => {
        var ideaId = req.params.ideaId
        Idea.findById(ideaId)
        .then((idea) => {
            res.send(idea)
        })
    },
    delete: (res, res) => {
        var ideaId = req.params.ideaId
        Idea.remove(ideaId)
        .then(() => {
            res.send(200)
        })
    },
    update: (req, res) => {
        var ideaId = req.params.ideaId
        Idea.findByIdAndUpdate(ideaId, req.body, {new: true})
        .then((updateIdea) => {
            updatedIdea.save()
            res.send(updatedIdea)
        })
    },
    create: (req, res) => {
        var userId = req.params.userId
        User.findById(userId)
        .then((user) => {
         Idea.create(req.body)
         .then((newIdea) => {
             console.log(newIdea)
             user.ideas.push(newIdea)
            user.save()
            res.send(newIdea)
         })
    }
}



module.exports = ideasController