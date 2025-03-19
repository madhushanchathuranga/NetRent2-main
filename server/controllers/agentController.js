const Agent = require('../models/AgentModel');

// @desc Register new agent
// @route POST /api/agents
// @access Public
const registerAgent = async (req, res) => {
    const {
        licenseNumber,
        email,
        phoneNumber,
        aboutMe,
        socialMedia,
        serviceProposal,
        marketingProposal,
        serviceFee
    } = req.body;

    try {
        // Check if the agent already exists
        const existingAgent = await Agent.findOne({ email });
        if (existingAgent) {
            return res.status(400).json({ message: 'Agent already registered' });
        }

        const agent = await Agent.create({
            licenseNumber,
            email,
            phoneNumber,
            aboutMe,
            socialMedia,
            serviceProposal,
            marketingProposal,
            serviceFee
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

module.exports = { registerAgent };
