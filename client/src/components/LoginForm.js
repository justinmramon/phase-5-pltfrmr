import React, { useState } from 'react';
import loginImage from '../assets/login image option 3.jpeg';
import CreateAccount from './CreateAccount';
import { Link, useNavigate } from 'react-router-dom';


function LoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showCreateAccount, setShowCreateAccount] = useState("")

    const navigate = useNavigate()

    function handleSubmit(event){
        event.preventDefault();
        fetch("/login",{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username, password })
        }).then (navigate('/home'))
    }

    function handleCreateAccount(){}

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
            <div className="hidden sm:block">
                <img className='w-full h-full object-cover' src={ loginImage } alt="" />
            </div>
            <div className ='bg-gray-800 flex flex-col justify-center'>
                <form className='max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg' onSubmit={ handleSubmit }>
                    <h2 className='text-4xl dark:text-white font-bold text-center'>Sign In</h2>
                        <div className='flex flex-col text-gray-300 py-2'>
                            <label htmlFor="username">Username</label>
                            <input 
                            id="username" 
                            autoComplete="off" 
                            value={ username } 
                            onChange={(event) => setUsername(event.target.value)} className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-600 focus:bg-gray-800 focus:outline-none' 
                            type="text" />
                        </div>
                        <div className='flex flex-col text-gray-300 py-2'>
                            <label htmlFor="password">Password</label>
                            <input 
                            id="password"
                            autoComplete="current-password"
                            value={ password }
                            onChange={(event) => setPassword(event.target.value)}
                            className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-600 focus:bg-gray-800 focus:outline-none'  
                            type="password" />
                        </div>
                        <div className='flex justify-between text-gray-400 py-2'>
                            <p className='flex items-center'>
                                <input className='mr-2' type="checkbox" />Remember Me</p>
                            <p>Forgot Password?</p>
                        </div>
                        <button className='w-full my-5 py-2 bg-sky-400 shadow-lg shadow-sky-400/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'>Sign In</button>
                        <div className='flex justify-center text-gray-400 py-2'>
                        <p className="text-center">Don't have an account?</p>
                        </div>
                        <div>
                        <Link className='flex justify-center' to={'/signup'}>
                        <button className='w-[50%] my-5 p-2 bg-sky-400 shadow-lg shadow-sky-400/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'>Create Account</button>
                        </Link>
                        </div>
                </form>
            </div>
        </div>
    )
}

export default LoginForm;