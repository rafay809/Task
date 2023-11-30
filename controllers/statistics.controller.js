const Worker = require('../models/worker.model');
const Group = require('../models/group.model');

async function getTotalNumberOfWorkersAndGroups(req, res) {
  try {
    const totalWorkers = await Worker.countDocuments();
    const totalGroups = await Group.countDocuments();

    res.status(200).json({ totalWorkers, totalGroups });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = { getTotalNumberOfWorkersAndGroups };
