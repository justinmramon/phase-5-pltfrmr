import React, { useState, useEffect } from 'react';
import Playlist from "./Playlist";

function MemberPage({ user, userList }){
    const [playlists, setPlaylists] = useState([])
    const currentMember = window.location.pathname.split("/")
    
    useEffect(() => {
        fetch('/playlists')
        .then((response) => response.json())
        .then((data) => setPlaylists(data))
    }, [])


    return(
        <div>
            <h2>Member Page</h2>
                {playlists.map((playlist) => (
                     playlist.user.username === currentMember[2] ? <Playlist user={ user } playlist={playlist} /> : null 
                ))}
        </div>
    )
}

export default MemberPage;