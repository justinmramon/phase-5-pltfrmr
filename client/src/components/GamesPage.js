import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReviewsCard from './ReviewsCard';
 

function GamesPage(){
    const [oneGame, setOneGame] = useState([])
    const {id} = useParams()

    useEffect(() => {
        fetch(`/games/${id}`)
        .then((response) => response.json())
        .then((data) => setOneGame(data))
    }, [])

    return(
        <div>
            <h1> { oneGame.title } </h1>
            <div>
                <ReviewsCard />
            </div>
        </div>
    )
}

export default GamesPage;