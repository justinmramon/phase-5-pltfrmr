import React, { useState } from 'react';
import createAccountImage from '../assets/login failed option 2.jpeg'

function SignUpForm({ onLogin }) {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
  
    function handleSubmit(e) {
      e.preventDefault();
      setErrors([]);
      setIsLoading(true);
      fetch("/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          username,
          password,
          password_confirmation: passwordConfirmation,
        }),
      }).then((r) => {
        setIsLoading(false);
        if (r.ok) {
          r.json().then((user) => onLogin(user));
        } else {
          r.json().then((err) => setErrors(err.errors));
        }
      });
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            value={ email }
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            autoComplete="off"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />
        </div>
        <div>
          <label htmlFor="password">Password Confirmation</label>
          <input
            type="password"
            id="password_confirmation"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            autoComplete="current-password"
          />
        </div>
        <div>
          <button type="submit">{isLoading ? "Loading..." : "Sign Up"}</button>
        </div>
        <div>
          {errors.map((err) => (
            <div key={err}>{err}</div>
          ))}
        </div>
      </form>
    );
  }
  
  export default SignUpForm;


// function CreateAccount({ setUser }) {
//     const [email, setEmail] = useState("")
//     const [username, setUsername] = useState("")
//     const [password, setPassword] = useState("")
//     const [passwordConfirmation, setPasswordConfirmation] = useState("")


//     function handleSubmit(event){
//         event.preventDefault();
//         fetch("/signup", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({
//                 email,
//                 username,
//                 password,
//                 passwordConfirmation: passwordConfirmation,
//             })
//         }).then(response => response.json())
//         .then(user => setUser(user))
//     }

//     return(
//         <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
//             <div className='hidden sm:block'>
//                 <img className='w-full h-full object-cover' src={ createAccountImage } alt="" />
//             </div>
//             <div className ='bg-gray-800 flex flex-col justify-center'>
//                 <form className='max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg' onSubmit={ handleSubmit }>
//                     <h2 className='text-4xl dark:text-white font-bold text-center'>Create Account</h2>
//                     <div className='flex flex-col text-gray-300 py-2'>
//                         <label htmlFor="email">Email Address</label>
//                             <input
//                             type="text"
//                             id="email"
//                             autoComplete="off"
//                             value={ email }
//                             onChange={(event) => setEmail(event.target.value)}
//                             className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-600 focus:bg-gray-800 focus:outline-none' />
//                     </div>
//                     <div className='flex flex-col text-gray-300 py-2'>
//                         <label htmlFor="username">Username</label>
//                             <input
//                             type="text"
//                             id="username"
//                             autoComplete="off"
//                             value={ username }
//                             onChange={(event) => setUsername(event.target.value)}
//                             className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-600 focus:bg-gray-800 focus:outline-none' />
//                     </div>
//                     <div className='flex flex-col text-gray-300 py-2'>
//                             <label htmlFor="password">Password</label>
//                             <input 
//                             id="password"
//                             autoComplete="current-password"
//                             value={ password }
//                             onChange={(event) => setPassword(event.target.value)}
//                             className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-600 focus:bg-gray-800 focus:outline-none'  
//                             type="password" />
//                         </div>
//                         <div className='flex flex-col text-gray-300 py-2'>
//                             <label htmlFor="password">Confirm Password</label>
//                             <input 
//                             id="password_confirmation"
//                             autoComplete="current-password"
//                             value={ passwordConfirmation }
//                             onChange={(event) => setPasswordConfirmation(event.target.value)}
//                             className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-600 focus:bg-gray-800 focus:outline-none'  
//                             type="password" />
//                         </div>
//                         <button className='w-full my-5 py-2 bg-cyan-400 shadow-lg shadow-cyan-400/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'>Register</button>
//                 </form>
//             </div>
//         </div>
//     )
// }

// export default CreateAccount;