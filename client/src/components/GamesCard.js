import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function GamesCard({ key, game }){

    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/games/${key}`,  { replace: true, state: game })
    }

    return (
            <div className='' onClick={ handleClick }>
                <h1>{ game.title }</h1>
                <img className='' src={ game.image } alt='' />
                <p>{ game.classNamegenre }</p>
                <p>{ game.platform }</p>
                <p>{ game.playtime} hours</p>
                <p>{ game.released }</p>
                <p>{ game.esrb_rating }</p>
            </div>
    )
}

export default GamesCard;