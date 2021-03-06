var express = require('express');
var router = express.Router();
var skillsCtrl = require('../controllers/skills');

/* All routes start with /skills */

// GET /skills (index functionality - get all skills)
router.get('/', skillsCtrl.index);

// GET /skills/new (new functionality - render "new" form)
router.get('/new', skillsCtrl.new);

// POST /skills (create functionality - create new skill)
router.post('/', skillsCtrl.create);

// GET /skills/:id (show functionality - get single skill)
router.get('/:id', skillsCtrl.show);

// GET /skills/:id/edit (edit functionality - render edit form)
router.get('/:id/edit', skillsCtrl.edit);

// // PUT /skills/:id (update functionality - update single skill)
router.put('/:id', skillsCtrl.update);

// DELETE /skills/:id (delete functionality - delete single skill)
router.delete('/:id', skillsCtrl.delete);





module.exports = router;
