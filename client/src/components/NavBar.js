import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

function NavBar({ user, setUser }) {
    const [nav, setNav] = useState(false)

    function handleNav(){
        setNav(!false)
    }


  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((response) => {
      if (response.ok) {
        setUser(null);
      }
    });
  }



  return (
    <nav>
        <div className='absolute'>
            <h1 className='w=full text-5xl font-bold text-sky-500 text-ellipsis'>PLTFRMR</h1>
            <ul className='flex'>
                <li className='p-4 bg-white'><Link to="/">Home</Link></li>
                <li className='p-4 bg-white'>Games</li>
                <li className='p-4 bg-white'>Lists</li>
                <li className='p-4 bg-white'>Users</li>
                <li className='p-4 bg-white cursor-pointer' onClick={ handleLogoutClick }>Logout</li>
            </ul>
            {/* <div>
                {!nav ? <AiOutlineClose size={ 20 } /> : <AiOutlineMenu size={ 20 } /> }
            </div> */}
        </div>
    </nav>
  );
}

export default NavBar;
