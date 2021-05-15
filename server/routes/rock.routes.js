const RockController = require('../controllers/rock.controller');
 
module.exports = app => {
    app.get('/api/rocks', RockController.findAllRocks);
    app.post('/api/rocks/create', RockController.createRock);
//     app.get('/api/users/:id', UserController.findOneSingleUser);
//     app.put('/api/users/:id', UserController.updateExistingUser);
//     app.delete('/api/users/:id', UserController.deleteAnExistingUser);
}
