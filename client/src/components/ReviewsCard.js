import React, { useState, useEffect } from 'react';

function ReviewsCard({ review, user }) {

    function handleDelete(id){
        fetch(`/reviews/${id}`, {
            method: 'DELETE'
        })
    }
    

    return (
        <div>
            <div>
                <p>{ review.user.username }</p>
                <p>{ review.comment }</p>
                <p>{ review.liked }</p>
                {review.user.id === user.id ? 
                    <form>
                        <button onClick={()=>handleDelete(review.id)}>Delete</button>
                    </form> : 
                    <></>}
            </div>
        </div>
    )
}

export default ReviewsCard;