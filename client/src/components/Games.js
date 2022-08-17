import React, { useState, useEffect } from 'react';
import GamesCard from './GamesCard';

function Games(){
    const [games, setGames] = useState([])

    useEffect(() => {
        fetch("/games")
        .then((response) => response.json())
        .then((data) => setGames(data))
    }, [])

    return(
        <ul className='flex'>
            {games.map((game) => {
                return <GamesCard title={ game.title } image={ game.image } genre={ game.genre } platform={ game.platform } playtime={ game.playtime } released={ game.released } esrb_rating={ game.esrb_rating } />
            })}
        </ul>
    )
}

export default Games;