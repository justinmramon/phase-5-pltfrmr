import React from 'react';
import { useNavigate } from 'react-router-dom';


function GamesCard({ title, image, genre, platform, playtime, released, esrb_rating }){



    return (
        <li>
            <div className='flex flex-col bg-white rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-80'>
                <h1>{ title }</h1>
                <img src={ image } alt='' />
                <p>{ genre }</p>
                <p>{ platform }</p>
                <p>{ playtime} minutes</p>
                <p>{ released }</p>
                <p>{ esrb_rating }</p>
                const navigate = useNavigate();
            </div>
        </li>
    )
}

export default GamesCard;