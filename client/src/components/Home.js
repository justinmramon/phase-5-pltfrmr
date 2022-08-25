import React, { useState } from 'react';

function Home({ user }) {
    const [playlistName, setPlaylistName] = useState("")
    const [playlistDescription, setPlaylistDescription] = useState("")


    function handleSubmit(e){
        e.preventDefault()
        let playlistData = {
            user_id: user.id,
            title: playlistName,
            description: playlistDescription
        }
        fetch('/playlists', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",  
                "Accept": "application/json"
            },
            body: JSON.stringify(playlistData)
        })
        e.target.reset()
    }
    
    return(
        <div>
            <form onSubmit={ handleSubmit }>
                <label>Member ID</label>
                <input type="text" name="member-id" placeholder={ user.id } autoComplete="off" />
                <label>Playlist Name</label>
                <input type="text" name="playlist-name" placeholder="Playlist Name" autoComplete="off" onChange={ (e) => setPlaylistName(e.target.value) } />
                <label>Playlist Description</label>
                <input type="text" name="playlist-description" placeholder="Playlist Description" autoComplete="off" onChange={ (e) => setPlaylistDescription(e.target.value) } />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Home;