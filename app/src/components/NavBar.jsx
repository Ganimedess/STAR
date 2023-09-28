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
    <header className="w-full absolute top-0">
      <div className="px-9 min-[1300px]:px-0">
        <div className="w-full mx-auto py-5 max-w-7xl text-xs sm:text-lg md:text-xl w-full text-slate-900">

          <ul className="flex w-full justify-between" role="tabpanel">
            <li className="px-1 hover:bg-white biggie" key='1'>
              <Link to='/' onClick={scrollTop} className="px-1 cursor-pointer">Portfolio 2023</Link>
            </li>
            <li className="max-sm:pl-5 px-1 hover:bg-white biggie" key='3'>
              <Link to="/" onClick={scrollWork}>Work</Link>
            </li>
            <li className="max-sm:pl-5 px-1 max-sm:hidden hover:bg-white biggie" key='2'>
              <Link to="/" onClick={scrollAbout}>About me</Link>
            </li>
            <li className="max-sm:pl-5 biggie" key='4'>
              <Link to="/" onClick={scrollContact} className="buttonNav p-2 px-3 rounded-lg bg-white hover:bg-verde hover:text-black">Reach out</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
