const Group = require('../models/group.model');

async function addGroup(req, res) {
  try {
    const { name, image, paymentType, hasCarRent, workId } = req.body;

    const newGroup = new Group({
      name,
      image,
      paymentType,
      hasCarRent,
      workId,
    });

    await newGroup.save();

    res.status(201).json({ message: 'Group added successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function assignGroupToWork(req, res) {
  try {
    const { groupId, workId } = req.params;

    const group = await Group.findById(groupId);

    if (!group) {
      return res.status(404).json({ error: 'Group not found' });
    }

    group.workId = workId;
    group.updatedAt = new Date();

    await group.save();

    res.status(200).json({ message: 'Group assigned to work successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function getDistinctGroupNames(req, res) {
  try {
    const distinctGroupNames = await Group.distinct('name');
    res.status(200).json(distinctGroupNames);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function getCountOfGroupsFromWork(req, res) {
  try {
    const groupCountByWork = await Group.aggregate([
      {
        $group: {
          _id: '$workId',
          count: { $sum: 1 },
        },
      },
    ]);

    res.status(200).json(groupCountByWork);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = { addGroup, assignGroupToWork, getDistinctGroupNames, getCountOfGroupsFromWork };
