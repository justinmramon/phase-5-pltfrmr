import React from "react";
import { Link } from "react-router-dom";

function NavBar({ user, setUser }) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <nav className='navbar'>
      <div>
      <Link to="/">HOME</Link>
      </div>
      <div>
        {user ? (
           <Link to="/" onClick={ handleLogoutClick }>Logout</Link>
        ) : (
          <>
      <Link to="/signup">Create Account</Link>
            <Link to="/login">Login</Link>
          </>
        )}

      </div>
 
    </nav>
  );
}

export default NavBar;
