import { useState } from "react";
import LoginForm from "./LoginForm";
import CreateAccount from "./CreateAccount";
import createAccountImage from '../assets/login image option 3git .jpeg';

function Login({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
      <div className='hidden sm:block'>
        <img className='w-full h-full object-cover' src={ createAccountImage } alt="" />
      </div>
      {showLogin ? (
          <LoginForm setShowLogin={ setShowLogin } onLogin={onLogin} />
      ) : (
          <CreateAccount setShowLogin={ setShowLogin } onLogin={onLogin} />
      )}
    </div>
  );
}

export default Login;

//                         <div className='flex justify-between text-gray-400 py-2'>
//                             <p className='flex items-center'>
//                                 <input className='mr-2' type="checkbox" />Remember Me</p>
//                             <p>Forgot Password?</p>
//                         </div>