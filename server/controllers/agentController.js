const Agent = require('../models/AgentModel');

// @desc Register new agent
// @route POST /api/agents
// @access Public
const registerAgent = async (req, res) => {
    const {
        name,
        phoneNumber,
        email,
        licenseNumber,
        aboutMe,
        socialMedia,
        serviceProposal,
        marketingProposal,
        serviceFee,
        profilePicture,
        totalSold,
        totalRented,
        totalSelected,
        views,
        rating
    } = req.body;

    try {
        // Check if the agent already exists
        const existingAgent = await Agent.findOne({ email });
        if (existingAgent) {
            return res.status(400).json({ message: 'Agent already registered' });
        }

        const agent = await Agent.create({
            name,
            phoneNumber,
            email,
            licenseNumber,
            aboutMe,
            socialMedia,
            serviceProposal,
            marketingProposal,
            serviceFee,
            profilePicture,
            totalSold,
            totalRented,
            totalSelected,
            views,
            rating
        });

        if (agent) {
            res.status(201).json({
                _id: agent._id,
                email: agent.email,
                message: 'Agent registered successfully'
            });
        } else {
            res.status(400).json({ message: 'Invalid agent data' });
        }
    } catch (error) {
        console.error(`Error: ${error.message}`);
        res.status(500).json({ message: 'Server error' });
    }
};

// @desc Get agent details by ID
// @route GET /api/agents/:id
// @access Public
const getAgentDetails = async (req, res) => {
    try {
        const agent = await Agent.findById(req.params.id);
        if (!agent) {
            return res.status(404).json({ message: 'Agent not found' });
        }
        res.status(200).json(agent);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { registerAgent, getAgentDetails };
