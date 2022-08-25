import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function PlaylistGames({ user, game }){

    // function handlePlaylistAdd(){
    //     fetch('/playlist_games', {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",  
    //         },
    //         body: JSON.stringify({
    //             playlist_id: ,
    //             game_id: game.id
    //         })
    //     })
    // }
    

    return (
                <div>
                    <h1>{ game.title }</h1>
                    <form>
                        <label for="playlist">Add to Playlist</label> 
                        <select name="playlist">
                        <option>Please Select a Playlist</option>
                            {user?.playlists.map(playlist => {
                                return <option>{ playlist.title ? playlist.title : "NO PLAYLIST TITLE FOUND" }</option>
                            })}
                        </select>
                    </form>
                    <Link to={`/games/${game.id}`}>
                        <img className='' src={ game.image } alt='' />
                    </Link>
                </div>
    )
}

export default PlaylistGames;