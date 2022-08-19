import React, { useState, useEffect } from 'react';
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import Games from "./components/Games";
import GamesPage from "./components/GamesPage";
import { Router, Routes, Route } from 'react-router-dom';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;

  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <main>
        <Routes>
          <Route path="/" element={ <Games user={user} /> } />
          <Route path="/games/:id" element={ <GamesPage /> } />
        </Routes>
      </main>
    </>
  );
}

export default App;


// function App() {
//   const [user, setUser] = useState(null)

//   useEffect(() => {
//     fetch("/me").then((response) => {
//       if (response.ok) {
//         response.json().then((user) => setUser(user));
//       }
//     });
//   }, [])

//   return (
// <div>
//     <NavBar user={user} setUser={setUser} />
//     <Wrapper>
//       {user ? (
//         <Routes>
//           <Route path="/" element={ <Games user={user} /> } />
//         </Routes>
//       ) : (
//         <Routes>
//           <Route path="/signup" element={ <CreateAccount setUser={setUser} /> } />
//           <Route path="/login" element={ <LoginForm setUser={setUser} /> } />
//         </Routes>
//       )}
//     </Wrapper>
//   </div>
//   );
//   }

// export default App;
