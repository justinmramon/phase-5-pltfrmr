import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function GamesCard({ user, game, playlists }){

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
                        {/* <select name="playlist">
                            {user.playlists?.map(playlist => {
                                <option text={!playlist.title ? "null" : playlist.title}></option>
                            })}
                        </select> */}
                    </form>
                    <Link to={`/games/${game.id}`}>
                        <img className='' src={ game.image } alt='' />
                    </Link>
                </div>
    )
}

export default GamesCard;