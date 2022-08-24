import React from 'react';

function Home({ user }) {


    function handleSubmit(e){
        e.preventDefault()
        let playlistData = {
            user_id: user.id,
            title: e.target[1].value,
            description: e.target[2].value
        }
        fetch('/playlists', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",  
            },
            body: JSON.stringify(playlistData)
        })
        e.target.reset()
        console.log(e)
    }
    
    return(
        <div>
            <form onSubmit={ handleSubmit }>
                <label>Member ID</label>
                <input type="text" name="member-id" placeholder={ user.id } />
                <label>Playlist Name</label>
                <input type="text" name="playlist-name" placeholder="Playlist Name" />
                <label>Playlist Description</label>
                <input type="text" name="playlist-description" placeholder="Playlist Description" />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Home;