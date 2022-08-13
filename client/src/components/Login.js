import React, { useState } from 'react';
import LoginForm from "./LoginForm";
import CreateAccount from "./CreateAccount";

function Login({ setUser }) {
    const [showLogin, setShowLogin] = useState(true);
  
    return (
      <wrapper>
        {showLogin ? (
          <div>
            <LoginForm />
          </div>
        ) : (
          <div>
            <CreateAccount setUser={ setUser } />
          </div>
        )}
      </wrapper>
    );
  }

  export default Login;
  