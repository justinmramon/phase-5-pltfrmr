import React, { useEffect, useState } from 'react';
import Playlist from "./Playlist";

function UserList({ user }){
    // const [userList, setUserList] = useState([])
    const [playlists, setPlaylists] = useState([])

    // useEffect(() => {
    //     fetch("/users")
    //     .then((response) => response.json())
    //     .then((data) => setUserList(data))
    // }, [])


    useEffect(() => {
        fetch('/playlists')
        .then((response) => response.json())
        .then((data) => setPlaylists(data))
    }, [])


    return(
        <ul>

            {playlists.map(playlist => (
                <li>
                   <Playlist key={playlist.id} playlist={playlist}/> 
                </li>
            ))}
        </ul>
    )
}

export default UserList;