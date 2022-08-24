import React, { useEffect, useState } from 'react';
import Playlist from "./Playlist";

function UserList({ user }){
    const [userList, setUserList] = useState([])
    const [playlists, setPlaylists] = useState([])

    useEffect(() => {
        fetch("/users")
        .then((response) => response.json())
        .then((data) => setUserList(data))
    }, [])


    useEffect(() => {
        fetch('/playlists')
        .then((response) => response.json())
        .then((data) => console.log(data))
    }, [])


    return(
        <ul>
            {/* {userList.map(user => {
                return user.id ===  ?
                <Playlist /> :
                <></>
            })} */}
        </ul>
    )
}

// {reviews.map((review) => {
//     return <ReviewsCard key={ review.id } user={ user } review={ review } setReviews={ setReviews } oneGame={ oneGame } />
// })}

export default UserList;