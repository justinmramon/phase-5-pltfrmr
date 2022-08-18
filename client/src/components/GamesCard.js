import React from 'react';
import { useNavigate } from 'react-router-dom';


function GamesCard({ title, image, genre, platform, playtime, released, esrb_rating }){

    // const destructuredGenre = genre?.map((entry) => entry)
    // console.log(destructuredGenre)

    return (
            <div className='flex flex-col bg-white rounded-lg shadow-md w-full m-6 overflow-x-scroll sm:w-80'>
                <h1>{ title }</h1>
                <img className='grid grid-cols-3 sm:grid-cols-2 h-full items-center' src={ image } alt='' />
                <p>{ genre }</p>
                <p>{ platform }</p>
                <p>{ playtime} hours</p>
                <p>{ released }</p>
                <p>{ esrb_rating }</p>
            </div>
    )
}

export default GamesCard;