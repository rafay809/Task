const express = require('express');
const router = express.Router();
const { addGroup, assignGroupToWork, getDistinctGroupNames, getCountOfGroupsFromWork } = require('../controllers/group.controller');

router.post('/add', addGroup);
router.put('/assign-to-work/:groupId/:workId', assignGroupToWork);
router.get('/distinct-names', getDistinctGroupNames);
router.get('/count-by-work', getCountOfGroupsFromWork);

module.exports = router;
