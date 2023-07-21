import React from "react";
import { Link } from 'react-router-dom';

const NavBar = () => {

  function scrollTop() {
    document.querySelector(".App").scrollTo(0,0);
  }

  return (
    <header className="w-full fixed top-0 max-sm:bg-[rgba(6,6,13,.7)]">
      <div className="pl-9 pr-5 min-[1300px]:px-0 ml-[-17px]">
        <div className="w-full mx-auto py-5 max-w-7xl text-xs sm:text-lg md:text-xl w-full text-white">

          <ul className="flex w-full justify-around" role="tabpanel">
            <li className="pl-5 sm:pl-10 hover:underline" key='1'>
              <span onClick={scrollTop} className="hover:underline cursor-pointer">Portfolio 2023</span>
            </li>
            <li className="pl-5 sm:pl-10 hover:underline" key='2'>
              <a href="#about">About me</a>
            </li>
            <li className="pl-5 sm:pl-10" key='3'>
              <a href="#contact" className="border-2 border-white p-2 rounded-lg hover:bg-white hover:text-black">Reach out</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
