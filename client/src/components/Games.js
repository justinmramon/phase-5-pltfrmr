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
        <div className=''>
            <div className=''>
                {games.map((game) => {
                    return <GamesCard key={game.id} game={ game } />
                })}
            </div>
        </div>
    )
}

export default Games;