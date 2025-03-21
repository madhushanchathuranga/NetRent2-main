const express = require('express');
const { registerAgent, getAgentDetails } = require('../controllers/agentController');

const router = express.Router();

// POST request to register a new agent
router.post('/', registerAgent);

// GET request to get agent details by ID
router.get('/:id', getAgentDetails);

module.exports = router;
