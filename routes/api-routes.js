const db = require('../models');

module.exports = function(app) {
    // Routes CRUD
    // Route to Create Burger
    app.post('/api/create', function(req, res) {
        db.reactburger.create({
            name: req.body.burgerName,
            eaten: req.body.eaten
        })
    });
    // Get Route for Burger Board
    app.get('/api/all-burgers', function(req, res) {
        db.reactburger.findAll({
            where: {
                eaten: false
            }
        }).then(function(data) {
            res.json(data);
        });
    });
    // Get Route for Eaten Burgers
    app.get('/api/eaten-burgers', function(req, res) {
        db.reactburger.findAll({
            where: {
                eaten: true
            }
        }).then(function(data) {
            res.json(data)
        })
    });
    // Update Route for Eating Burgers
    app.put('/api/eat', function(req, res) {
        db.reactburger.update({
            eaten: true,
        }, {
            where: {
                id: req.params.id
            }
        }).then(function(data) {
            res.json(data)
        })
    });
    // Delete Route for Removing from Board
    app.delete('/api/delete:id', function(req, res) {
        db.reactburger.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(data) {
            res.json(data)
        })
    });
}