import React, { useState, useEffect } from 'react';

function ReviewsCard() {

    useEffect(() => {
        fetch(`/reviews`)
        .then((response) => response.json())
        .then((data) => console.log(data))
    }, [])

    return (
        <div></div>
    )
}

export default ReviewsCard;