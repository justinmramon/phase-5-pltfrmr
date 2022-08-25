import React, { useState, useEffect } from 'react';
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import Games from "./components/Games";
import GamesPage from "./components/GamesPage";
import UserList from "./components/UserList";
import Home from "./components/Home";
import MemberPage from "./components/MemberPage";
import { Routes, Route } from 'react-router-dom';

function App() {
  const [user, setUser] = useState(null);
  const [userList, setUserList] = useState([])
  const [playlists, setPlaylists] = useState([])

  useEffect(() => {
    // auto-login
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  useEffect(() => {
    fetch('/playlists')
    .then((response) => response.json())
    .then((data) => setPlaylists(data))
  }, [])

  useEffect(() => {
      fetch('/users')
      .then((response) => response.json())
      .then((data) => setUserList(data))
  }, [])

  if (!user) return <Login onLogin={setUser} />;

  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <main>
        <Routes>
          <Route path="/" element={ <Home user={ user } /> } />
          <Route path="/games" element={ <Games playlists={ playlists } userList={ userList } user={ user } /> } />
          <Route path="/games/:id" element={ <GamesPage user={ user } /> } />
          <Route path="/users" element={ <UserList key={userList.id} userList={ userList } user={ user } /> } />
          <Route path="/users/:id" element={ <MemberPage userList={ userList } user={ user } /> } />
        </Routes>
      </main>
    </>
  );
}

export default App;
