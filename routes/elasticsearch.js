var express = require('express');
var router = express.Router();
var elastic_search_service = require('./../service/elastic-search.service');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('elastic search test');
});

/**
 * Test
 */
router.get('/test', (req, res) => {
    return elastic_search_service.test()
        .then(result => res.json(result))
        .catch(err => res.status(500).json(err));
});

/**
 * 
 */
router.put('/save', (req, res) => {
    return elastic_search_service.save(req.body)
    .then(result => res.json(result))
    .catch(err => res.status(500).json(err));
});

/**
 * 
 */
router.post('/get', (req, res) => {
    return elastic_search_service.get(req.body)
    .then(result => res.json(result))
    .catch(err => res.status(500).json(err));
});

/**
 * 
 */
router.post('/search', (req, res) => {
    return elastic_search_service.search(req.body)
    .then(result => res.json(result))
    .catch(err => res.status(500).json(err));
});

module.exports = router;
