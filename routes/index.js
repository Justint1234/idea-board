const express  = require('express')
const router = express.Router() 
const userController = require('../controllers/UsersControllers')
const ideasController = require('../controllers/ideasController')

router.get('/api/users', userController.index)
router.get('/api/users/:userId', userController.show)
router.post('/api/users/:usersId', userController.post)
router.patch('/api/users/:usersId', userController.update)
router.delete('/api/users/:usersId', userController.delete)

router.get('/api/users/:usersId/ideas', ideasController.index)
router.get('/api/users/:userId/ideas/:ideaId', ideasController.show)
router.delete('/api/ideas/:ideaId', ideasController.delete)
router.patch('/api/ideas/ideas/:ideaid', ideasController.update)
router.post('/api/users/:usersId/ideas', ideasController.create)

module.exports = router