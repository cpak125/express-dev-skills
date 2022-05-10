var express = require('express');
var router = express.Router();
var skillsCtrl = require('../controllers/skills');

/* All routes start with /skills */

// GET /skills (index functionality - get all skills)
router.get('/', skillsCtrl.index);

// GET /skills/:id (show functionality - get single skill)
router.get('/:id', skillsCtrl.show);

module.exports = router;
