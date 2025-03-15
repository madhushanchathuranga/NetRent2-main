const express = require('express');
const { registerAgent } = require('../controllers/agentController');

const router = express.Router();

router.post('/', registerAgent); // POST request to register a new agent

module.exports = router;
