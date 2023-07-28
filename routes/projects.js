var data = require('../data-store');
var projects = data.getProjects();
var router = require('express').Router();

router.get('/', function (req, res) {
    res.json(projects)
});

router.get('/active', function (req, res) {
    res.json(projects.filter(p => p.isActive));
})

router.get('/:id', function (req, res) {
    var hi = projects.find(function (project) {
        return project.id === parseInt(req.params.id)
    });

    if (hi) {
        res.json(hi)
    } else {
        res.status(404).json({'message': 'No Project Found'})
    }
});


module.exports = router;
