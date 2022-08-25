import React, { useEffect, useState } from 'react';
import Playlist from "./Playlist";
import { Link } from 'react-router-dom';

function UserList({ user, userList }){


    return(
        <ul>
            {userList.map(userData => (
                <Link to={`/users/${userData.username}`}>
                    <li>
                        { userData.username } 
                    </li>
                </Link>
            ))}
        </ul>
    )
}

export default UserList;