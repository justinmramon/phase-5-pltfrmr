import React, { useState, useEffect } from 'react';

function Games(){
    const [games, setGames] = useState([])

    useEffect(() => {
        fetch("/games")
        .then((response) => response.json())
        .then((data) => setGames(data))
    }, [])

    return(
        <div>
            {games.map((game) => {
                return <div>{ game.title }</div>
            })}
        </div>
    )
}

export default Games;