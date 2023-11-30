const express = require('express');
const router = express.Router();
const { addWork, updateWork, deleteWork } = require('../controllers/work.controller');

router.post('/add', addWork);
router.put('/update/:workId', updateWork);
router.delete('/delete/:workId', deleteWork);

module.exports = router;
