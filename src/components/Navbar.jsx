import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white py-4 px-6 flex justify-between items-center">
      <div className="text-xl font-bold">
        <Link to="/" className="text-violet-400 hover:text-violet-300">
          Koen's Portfolio
        </Link>
      </div>
      <ul className="flex space-x-6">
        <li>
          <Link to="/" className="hover:text-violet-300">
            Home
          </Link>
        </li>
        <li>
          <Link to="/projects" className="hover:text-violet-300">
            Projecten
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-violet-300">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
