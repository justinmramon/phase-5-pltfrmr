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
        <div className='p-5 bg-inherit'>
            <div className='grid grid-cols-3'>
                {games.map((game) => {
                    return <GamesCard key={game.id} title={ game.title } image={ game.image } genre={ game.genre} platform={ game.platform } playtime={ game.playtime } released={ game.released } esrb_rating={ game.esrb_rating } />
                })}
            </div>
        </div>
    )
}

export default Games;