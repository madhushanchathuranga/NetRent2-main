const express = require('express');
const router = express.Router();
const db = require('../db'); // Database connection

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const [agent] = await db.query('SELECT * FROM agents WHERE id = ?', [id]);
        if (!agent) {
            return res.status(404).json({ message: 'Agent not found' });
        }
        res.json(agent);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
});

module.exports = router;
