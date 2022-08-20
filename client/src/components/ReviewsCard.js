import React, { useState, useEffect } from 'react';

function ReviewsCard({ review, user }) {

    

    return (
        <div>
            <div>
                <p>{ review.user.username }</p>
                <p>{ review.comment }</p>
                <p>{ review.liked }</p>
            </div>
        </div>
    )
}

export default ReviewsCard;