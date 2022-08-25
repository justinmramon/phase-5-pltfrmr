import React, { useEffect, useState } from 'react';
import GamesCard from "./GamesCard";
import PlaylistGames from "./PlaylistGames";

function PlaylistPage({ user, playlist_game }){
    const [games, setGames] = useState([]);

    useEffect(() => {
        fetch('/games')
        .then(response => response.json())
        .then(data => setGames(data))
    },[])

    const gameToDisplay = games.filter(game => parseInt(game.id) === parseInt(playlist_game.id))

    return(
        <ul>
            {gameToDisplay.map(game => (
                <PlaylistGames user={ user } game={ game } />
            ))}
        </ul>
    )
}

export default PlaylistPage;