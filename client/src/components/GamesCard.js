import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function GamesCard({ game }){


    

    return (
            <Link to={`/games/${game.id}`}>
                <div className='' >
                    <h1>{ game.title }</h1>
                    <img className='' src={ game.image } alt='' />
                </div>
            </Link>
    )
}

export default GamesCard;