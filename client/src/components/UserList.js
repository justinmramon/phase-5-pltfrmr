import React, { useEffect, useState } from 'react';
import Playlist from "./Playlist";

function UserList(){
    const [userList, setUserList] = useState([])

    useEffect(() => {
        fetch("/users")
        .then((response) => response.json())
        .then((data) => setUserList(data))
    }, [])


    return(
        <ul>
            {userList.map(user => {
                return <Playlist user={ user } />
            })}
        </ul>
    )
}

export default UserList;