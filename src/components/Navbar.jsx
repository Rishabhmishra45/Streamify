import { Link } from 'react-router-dom';

const Navbar = () => {
  return (

    <nav className="absolute top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-12 py-5  from-black/60 to-transparent">
      <Link to="/">
        <h1 className="text-3xl font-extrabold text-red-600 cursor-pointer">STREAMIFY</h1>
      </Link>
      
      <div className="flex gap-3">
        <Link 
          to="/signup" 
          className="border border-white px-4 py-1 rounded hover:bg-white hover:text-black transition text-white"
        >
          Sign Up
        </Link>
        
        <Link 
          to="/signin" 
          className="bg-red-600 px-4 py-1 rounded hover:bg-red-700 transition text-white"
        >
          Sign In
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;