import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PlaylistPage from './PlaylistPage'

function Playlist ({ user, playlist }) {
    const [showGames, setShowGames] = useState(false);

    return(
        <div>
            <li onClick={() => setShowGames(!showGames)}>{!playlist.title ? "No Title" : playlist.title}</li>
            {showGames ? 
            playlist.playlist_games.map(playlist_game => (
                <PlaylistPage user={ user } playlist_game={playlist_game} /> )) : 
            <></>}
        </div>

    )
}


export default Playlist;
