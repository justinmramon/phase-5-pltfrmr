import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PlaylistPage from './PlaylistPage'

function Playlist ({playlist}) {

    const [showGames, setShowGames] = useState(false);

    return(
        <li>
            <li onClick={() => setShowGames(!showGames)}>{playlist.user.username}</li>
            {showGames ? 
            playlist.playlist_games.map(playlist_game => (
            <PlaylistPage playlist_game={playlist_game}/> )) : 
            <></>}
        </li>

    )
}


export default Playlist;
