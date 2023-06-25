import React from "react";
import { Link } from 'react-router-dom';

const NavBar = () => {

  function tabClick() {
    const app = document.querySelector(".App")
    app.scroll(0,0)
  }

  return (
    <header className="w-full fixed top-0">
      <div className="flex justify-between mx-auto px-5 xl:px-0 py-5 max-w-7xl text-xs sm:text-base w-full text-white">
        <Link onClick={tabClick} to="/">Portfolio_2023</Link>
        <ul className="flex" role="tabpanel">
          <li className="pl-5 sm:pl-10" key='1'>
            <Link onClick={tabClick} to="/about">About me</Link>
          </li>
          <li className="pl-5 sm:pl-10">
            <Link onClick={tabClick} to="/contact" className="border-2 border-white p-2 rounded-lg hover:bg-white hover:text-black">Reach out</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default NavBar;
