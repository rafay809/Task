const express = require('express');
const router = express.Router();
const { addWorker, addWorkerToWorkAndGroup, getDistinctWorkerNames, getCountOfWorkersInEachGroup } = require('../controllers/worker.controller');

router.post('/add', addWorker);
router.put('/add-to-work-and-group/:workerId/:workId/:groupId', addWorkerToWorkAndGroup);
router.get('/distinct-names', getDistinctWorkerNames);
router.get('/count-by-group', getCountOfWorkersInEachGroup);

module.exports = router;