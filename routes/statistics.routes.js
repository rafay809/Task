const express = require('express');
const router = express.Router();
const { getTotalNumberOfWorkersAndGroups } = require('../controllers/statistics.controller');

router.get('/total', getTotalNumberOfWorkersAndGroups);

module.exports = router;
