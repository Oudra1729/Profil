import React from 'react';
import logo from '../assets/logoo.jpeg';
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa"; // Updated Twitter icon

const Navbar = () => {
  return (
    <nav>
      <div className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
          <img src={logo} alt="logo" className="w-16 h-16 object-contain" />
        </div>

        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          <a href="https://github.com/Oudra1729" aria-label="Github" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/brahim-oudra-2269151a6/?trk=public-profile-join-page" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
            <FaTwitterSquare /> 
          </a>
          <a href="https://www.instagram.com/its_o_udra/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
