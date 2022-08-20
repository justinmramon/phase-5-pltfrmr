import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReviewsCard from './ReviewsCard';
 

function GamesPage({ user }){
    const [oneGame, setOneGame] = useState([])
    const [reviews, setReviews] = useState([])
    const [newReview, setNewReview] = useState("")

    const {id} = useParams()

    useEffect(() => {
        fetch(`/games/${id}`)
        .then((response) => response.json())
        .then((data) => setOneGame(data))
    }, [])

    useEffect(() => {
        fetch(`/games/${id}/reviews`)
        .then((response) => response.json())
        .then((data) => setReviews(data))
    }, [])

    function handleNewReview(newReview){
        const reviewData = {
            comment: newReview,
            game_id: id,
            user_id: user.id,
            liked: true,
        }
        fetch(`/reviews`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
          },
        body: JSON.stringify(reviewData)})
        .then((response) => response.json())
        .then((data) => setReviews([...reviews, data]))
    }

    const handleSubmit = (event) => {
        event.persist();
        event.preventDefault();
        handleNewReview(newReview);
    }

    const handleChange = (event) => {
        setNewReview(event.target.value)
    }

    return(
        <div>
            <div>
                <h1 className='text-4xl'> { oneGame.title } </h1>
                    <form onSubmit={ handleSubmit }>
                        <label>Leave A Comment</label>
                        <input onChange={ handleChange } type='text'></input>
                        <button type='submit'>Submit</button>
                    </form>
                <div>
                    {reviews.map((review) => {
                        return <ReviewsCard key={ review.id } user={ user } review={ review } setReviews={ setReviews } oneGame={ oneGame } />
                    })}
                </div>
            </div>
        </div>
    )
}

export default GamesPage;