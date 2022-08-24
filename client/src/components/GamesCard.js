import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function GamesCard({ game }){

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
                <div className='' >
                    <h1>{ game.title }</h1>
                    <button >Add to My Playlist</button>
                    <Link to={`/games/${game.id}`}>
                        <img className='' src={ game.image } alt='' />
                    </Link>
                </div>
    )
}

export default GamesCard;