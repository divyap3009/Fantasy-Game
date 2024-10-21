import React, { useState } from 'react';
import PlayerList from './PlayerList';

function TeamForm() {
    const [selectedPlayers, setSelectedPlayers] = useState([]);
    const [teamCreated, setTeamCreated] = useState(null);

    const handlePlayerSelect = (playerId) => {
        if (selectedPlayers.length < 11 && !selectedPlayers.includes(playerId)) {
            setSelectedPlayers([...selectedPlayers, playerId]);
        } else {
            alert('You can only select 11 players.');
        }
    };

    const handleSubmit = async () => {
        try {
            const response = await fetch('http://localhost:5000/teams', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ players: selectedPlayers }),
            });
            const data = await response.json();
            setTeamCreated(data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h2>Create Your Team</h2>
            <PlayerList onPlayerSelect={handlePlayerSelect} selectedPlayers={selectedPlayers} />
            <button onClick={handleSubmit}>Create Team</button>

            {teamCreated && (
                <div className="team-info">
                    <h3>Your Team:</h3>
                    <ul>
                        {teamCreated.players.map(player => (
                            <li key={player._id}>{player.name} - {player.points} points</li>
                        ))}
                    </ul>
                    <p>Total Points: {teamCreated.totalPoints}</p>
                </div>
            )}
        </div>
    );
}

export default TeamForm;
