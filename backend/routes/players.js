const express = require('express');
const router = express.Router();
const Player = require('../models/player');

router.get('/', async (req, res) => {
    try {
        const players = await Player.find();
        res.json(players);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving players' });
    }
});

module.exports = router;
