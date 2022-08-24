import React, { useState, useEffect } from 'react';
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import Games from "./components/Games";
import GamesPage from "./components/GamesPage";
import UserList from "./components/UserList";
import Home from "./components/Home";
import { Router, Routes, Route } from 'react-router-dom';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;

  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <main>
        <Routes>
          <Route path="/" element={ <Home user={ user } /> } />
          <Route path="/games" element={ <Games user={ user } /> } />
          <Route path="/games/:id" element={ <GamesPage user={ user } /> } />
          <Route path="/users" element={ <UserList user={ user } /> } />
        </Routes>
      </main>
    </>
  );
}

export default App;
