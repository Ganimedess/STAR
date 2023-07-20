import React from "react";
import { Link } from 'react-router-dom';

const NavBar = () => {

  return (
    <header className="w-full fixed top-0 max-sm:bg-[rgba(6,6,13,.7)]">
      <div className="pl-9 pr-5 min-[1300px]:px-0 ml-[-17px]">
        <div className="flex justify-between mx-auto py-5 max-w-7xl text-xs sm:text-lg md:text-xl w-full text-white">
          <Link to="/" className="hover:underline">Portfolio 2023</Link>
          <ul className="flex" role="tabpanel">
            <li className="pl-5 sm:pl-10 hover:underline" key='1'>
              <Link to="/about">About me</Link>
            </li>
            <li className="pl-5 sm:pl-10">
              <Link to="/contact" className="border-2 border-white p-2 rounded-lg hover:bg-white hover:text-black">Reach out</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
