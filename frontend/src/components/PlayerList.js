import React, { useState, useEffect } from 'react';

function PlayerList({ onPlayerSelect, selectedPlayers }) {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        const fetchPlayers = async () => {
            try {
                const response = await fetch('http://localhost:5000/players');
                const data = await response.json();
                setPlayers(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchPlayers();
    }, []);

    return (
        <div>
            <h2>Available Players</h2>
            <ul>
                {players.map(player => (
                    <li key={player._id}>
                        {player.name} - {player.points} points
                        <button 
                            onClick={() => onPlayerSelect(player._id)} 
                            disabled={selectedPlayers.includes(player._id)}
                        >
                            {selectedPlayers.includes(player._id) ? 'Selected' : 'Add to Team'}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PlayerList;
