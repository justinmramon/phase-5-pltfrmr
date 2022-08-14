import { useState } from "react";
import LoginForm from "./LoginForm";
import CreateAccount from "./CreateAccount";

function Login({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div>
      {showLogin ? (
        <>
          <LoginForm onLogin={onLogin} />
          <p>
            Don't have an account? &nbsp;
            <button color="secondary" onClick={() => setShowLogin(false)}>Sign Up</button>
          </p>
        </>
      ) : (
        <>
          <CreateAccount onLogin={onLogin} />
          <p>
            Already have an account? &nbsp;
            <button color="secondary" onClick={() => setShowLogin(true)}>Log In</button>
          </p>
        </>
      )}
    </div>
  );
}

export default Login;