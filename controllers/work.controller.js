const Work = require('../models/work.model');

async function addWork(req, res) {
  try {
    const workData = req.body;
    const work = await Work.create(workData);
    res.status(201).json(work);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function updateWork(req, res) {
  try {
    const { id } = req.params;
    const updatedWork = await Work.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(updatedWork);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function deleteWork(req, res) {
  try {
    const { id } = req.params;
    await Work.findByIdAndDelete(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = { addWork, updateWork, deleteWork };
