import React, { useState } from "react";
import { Link } from "react-router-dom";

function NavBar({ user, setUser }) {


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
        </div>
    </nav>
  );
}

export default NavBar;
