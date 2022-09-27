const express = require('express');
const {mssvRequest} = require('../controllers/controllers.mssvcontroller');
const {indexRequest} = require('../controllers/controllers.indexcontroller');
const router = express.Router();

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})
// define the home page route
router.get('/:friendID', mssvRequest);
router.get('/', indexRequest);
// define the about route

module.exports = router