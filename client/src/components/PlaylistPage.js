import React, { useEffect, useState } from 'react';
import GamesCard from "./GamesCard";
import { Link } from 'react-router-dom';

function PlaylistPage({ user, playlist_game }){
    const [games, setGames] = useState([]);
    const [showPlaylistGames, setShowPlaylistGames] = useState([])

    useEffect(() => {
        fetch('/games')
        .then(response => response.json())
        .then(data => setGames(data))
    },[])

      useEffect(() => {
        fetch('/playlist_games')
        .then(response => response.json())
        .then(data => setShowPlaylistGames(data))
    },[])

    const playlistGamesToDisplay = showPlaylistGames.filter(showPlaylistGame => parseInt(showPlaylistGame.id) === parseInt(playlist_game.id))

    const gameToDisplay = games.filter(game => parseInt(game.id) === parseInt(playlist_game.id))

    return(
        <div>
        <ul>
            {gameToDisplay.map(game => (
                <GamesCard user={ user } game={ game } />
            ))}
        </ul>

        {playlistGamesToDisplay?.map(showPlaylistGame => {
            return (
                <Link to={`/games/${showPlaylistGame.game_id}`}><img key={showPlaylistGame.id} src={showPlaylistGame?.game?.image} /></Link>
            )
        })}
        </div>
    )
}

export default PlaylistPage;