import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    
    // Save the email to localStorage so Explore.js can read it
    localStorage.setItem('userEmail', email);

    alert("Login Successful! Redirecting...");
    navigate('/explore');
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black">
      <div 
        className="absolute inset-0 bg-[url('https://cdn.mos.cms.futurecdn.net/98GnqFKaUMYU3GG5HxhLWZ.jpg')] bg-cover bg-center opacity-50"
        aria-hidden="true"
      ></div>
      
      <div className="relative z-10 w-full max-w-[450px] p-8 md:p-16 bg-black/80 rounded-md text-white">
        <h2 className="text-3xl font-bold mb-7">Sign In</h2>
        
        <form onSubmit={handleSignIn} className="flex flex-col gap-4">
          <input 
            type="email" 
            placeholder="Email or phone number" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-12 px-4 rounded bg-gray-800 border-none focus:ring-2 focus:ring-gray-500 outline-none text-white"
            required
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full h-12 px-4 rounded bg-gray-800 border-none focus:ring-2 focus:ring-gray-500 outline-none text-white"
            required
          />
          
          <button 
            type="submit" 
            className="w-full h-12 mt-6 bg-red-600 rounded font-bold hover:bg-red-700 transition duration-200"
          >
            Sign In
          </button>
        </form>

        <div className="mt-10 text-gray-500">
          New to Streamify? 
          <Link to="/signup" className="text-white hover:underline ml-1 font-medium">
            Sign up now.
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;