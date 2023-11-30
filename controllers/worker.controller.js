const Worker = require('../models/worker.model');

async function addWorker(req, res) {
  try {
    const { name, image, workerId, mobileNumber, joiningDate, hasCarRent, groupId, workId } = req.body;

    const newWorker = new Worker({
      name,
      image,
      workerId,
      mobileNumber,
      joiningDate,
      hasCarRent,
      groupId,
      workId,
      isDeleted: false,
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    await newWorker.save();

    res.status(201).json({ message: 'Worker added successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function addWorkerToWorkAndGroup(req, res) {
  try {
    const { workerId, workId, groupId } = req.params;

    const worker = await Worker.findOne({ workerId });

    if (!worker) {
      return res.status(404).json({ error: 'Worker not found' });
    }

    worker.workId = workId;
    worker.groupId = groupId;
    worker.updatedAt = new Date();

    await worker.save();

    res.status(200).json({ message: 'Worker added to work and group successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function getDistinctWorkerNames(req, res) {
  try {
    const distinctWorkerNames = await Worker.distinct('name');
    res.status(200).json(distinctWorkerNames);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function getCountOfWorkersInEachGroup(req, res) {
  try {
    const workersCountByGroup = await Worker.aggregate([
      {
        $group: {
          _id: '$groupId',
          count: { $sum: 1 },
        },
      },
    ]);

    res.status(200).json(workersCountByGroup);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = { addWorker, addWorkerToWorkAndGroup, getDistinctWorkerNames, getCountOfWorkersInEachGroup };
