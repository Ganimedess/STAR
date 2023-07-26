import React from "react";
import { Link } from 'react-router-dom';

const NavBar = () => {

  function scrollTop() {
    document.querySelector(".App").scrollTo(0,0);
  }
  async function scrollAbout() {
    waitForElm('#about').then((elm) => {
      document.querySelector('.App').scrollTo(0,elm.offsetTop)
    });
  }
  async function scrollWork() {
    waitForElm('#work').then((elm) => {
      document.querySelector('.App').scrollTo(0,elm.offsetTop)
    });
  }
  async function scrollContact() {
    waitForElm('#contact').then((elm) => {
      document.querySelector('.App').scrollTo(0,elm.offsetTop)
    });
  }

  function waitForElm(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
  }


  return (
    <header className="w-full fixed top-0 max-sm:bg-[rgba(6,6,13,.7)]">
      <div className="pl-9 pr-5 min-[1300px]:px-0 ml-[-17px]">
        <div className="w-full mx-auto py-5 max-w-7xl text-xs sm:text-lg md:text-xl w-full text-white">

          <ul className="flex w-full justify-around" role="tabpanel">
            <li className="pl-5 sm:pl-10 hover:underline" key='1'>
              <Link to='/' onClick={scrollTop} className="hover:underline cursor-pointer">Portfolio 2023</Link>
            </li>
            <li className="pl-5 sm:pl-10 hover:underline" key='3'>
              <Link to="/" onClick={scrollWork}>Work</Link>
            </li>
            <li className="pl-5 sm:pl-10 hover:underline max-sm:hidden" key='2'>
              <Link to="/" onClick={scrollAbout}>About me</Link>
            </li>
            <li className="pl-5 sm:pl-10" key='4'>
              <Link to="/" onClick={scrollContact} className="border-2 border-white p-2 rounded-lg hover:bg-white hover:text-black">Reach out</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
