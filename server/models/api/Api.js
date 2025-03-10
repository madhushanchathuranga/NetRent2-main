const express = require('express');
const router = express.Router();

router.post('/resources', (req, res) => {
    res.json({ success: true });
});
