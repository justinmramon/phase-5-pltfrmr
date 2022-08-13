import React, { useState, useEffect } from 'react';
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import CreateAccount from "./components/CreateAccount";
import { Routes, Route } from 'react-router-dom';


function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, [])

  return (
<div>
    <NavBar user={user} setUser={setUser} />
    <div className="content-wrapper">
      {user ? (
        <Routes>
          <Route path="/" element={ <Home user={user} /> } />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/signup" element={ <CreateAccount setUser={setUser} /> } />
          <Route path="/login" element={ <Login setUser={setUser} /> } />
        </Routes>
      )}
    </div>
  </div>
  );
  }

export default App;
