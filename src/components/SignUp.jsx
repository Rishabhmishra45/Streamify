import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // 1. Log the data (simulating a database save)
    console.log("Account Created:", formData);
    
    // 2. Show the Success Alert
    alert(`Welcome ${formData.fullName}! Your account has been created successfully.`);
    
    // 3. Navigate to the Sign In page after the user clicks "OK" on the alert
    navigate('/signin'); 
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black">
      {/* Background Overlay */}
      <div 
        className="absolute inset-0 bg-[url('https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQavW2NsPoRMpRHtA9QrkRartIDbya5GDWj9uAjmtlkC7PSIMKoQ5QJ3k8SnlnKScjniyV7H0Owxjd7-CVxX3BCawy4K-8b0z_h8sEqbi4Rh1nMGhqVWa1RLbUXlW3SzGLnruqO1sjjiw5oeLqri7MtL3HDU.jpg?r=de5')] bg-cover bg-center opacity-50"
        aria-hidden="true"
      ></div>
      
      {/* Sign Up Box */}
      <div className="relative z-10 w-full max-w-[450px] p-8 md:p-16 bg-black/80 rounded-md text-white">
        <h2 className="text-3xl font-bold mb-7">Sign Up</h2>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input 
            type="text" 
            name="fullName"
            placeholder="Full Name" 
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full h-12 px-4 rounded bg-gray-800 border-none focus:ring-2 focus:ring-gray-500 outline-none text-white"
          />
          <input 
            type="email" 
            name="email"
            placeholder="Email address" 
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full h-12 px-4 rounded bg-gray-800 border-none focus:ring-2 focus:ring-gray-500 outline-none text-white"
          />
          <input 
            type="password" 
            name="password"
            placeholder="Add a password" 
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full h-12 px-4 rounded bg-gray-800 border-none focus:ring-2 focus:ring-gray-500 outline-none text-white"
          />
          
          <button 
            type="submit" 
            className="w-full h-12 mt-6 bg-red-600 rounded font-bold hover:bg-red-700 transition duration-200"
          >
            Get Started
          </button>
        </form>

        <div className="mt-10 text-gray-500">
          Already have an account? 
          <Link to="/signin" className="text-white hover:underline ml-1 font-medium">
            Sign in now.
          </Link>
        </div>
      </div>
    </div>
  ); 
};

export default SignUp;