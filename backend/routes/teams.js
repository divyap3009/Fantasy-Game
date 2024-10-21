const express = require('express');
const router = express.Router();
const Team = require('../models/team');
const Player = require('../models/player');

router.post('/', async (req, res) => {
    try {
        const playerIds = req.body.players;
        const players = await Player.find({ _id: { $in: playerIds } });

        const totalPoints = players.reduce((sum, player) => sum + player.points, 0);

        const newTeam = new Team({ players: playerIds, totalPoints });
        await newTeam.save();

        const populatedTeam = await Team.findById(newTeam._id).populate('players');
        res.status(201).json(populatedTeam);
    } catch (error) {
        res.status(400).json({ message: 'Error creating team' });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const team = await Team.findById(req.params.id).populate('players');
        res.json(team);
    } catch (error) {
        res.status(404).json({ message: 'Team not found' });
    }
});

module.exports = router;
