import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function GamesCard({ user, game }){
    const [playlist, setPlaylist] = useState([])
    // const [playlistGames, setPlaylistGames] = useState([])

    function handlePlaylistAdd(){
        fetch('/playlist_games', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                playlist_id: playlist,
                game_id: game.id
            })
        })
    }


    return (
                <div>
                    <h1>{ game.title }</h1>
                    <form onSubmit={ handlePlaylistAdd }>
                        <label for="playlist">Add to Playlist</label> 
                        <select name="playlist" onChange={(e) => setPlaylist(e.target.value)}>
                            <option>Please Select a Playlist</option>
                            {user?.playlists.map(playlist => {
                                return <option value={ playlist.id }>{ playlist.title }</option>
                            })}
                        </select>
                        <button>Submit</button>
                    </form>
                    <Link to={`/games/${game.id}`}>
                        <img className='' src={ game.image } alt='' />
                    </Link>
                </div>
    )
}

export default GamesCard;
