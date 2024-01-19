import React from "react";
import { Link } from 'react-router-dom';

const NavBar = () => {

  function scrollTop() {
    document.querySelector(".App").scrollTo(0,0);
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
    <>
    <header className="max-w-7xl top-0 left-[50%] translate-x-[-50%] fixed w-full mx-auto z-20">
      <div className="px-9 min-[1300px]:px-0">
        <div className="w-full pt-8 max-w-7xl text-xs sm:text-lg md:text-xl w-full text-slate-900">

          <ul className="flex w-full justify-between h-0" role="tabpanel">
            <li className="biggie" key='1'>
              <Link to='/' onClick={scrollTop} className="p-1 px-2 cursor-pointer bg-white hover:bg-verde">Portfolio 2023</Link>
            </li>
            <li className="max-sm:pl-5 biggie" key='2'>
              <Link to="/" onClick={scrollContact} className="buttonNav p-2 px-3 rounded-lg bg-white hover:bg-verde hover:text-black">Reach out</Link>
            </li>
          </ul>

        </div>
      </div>
    </header>

    <div className="overlayTop"></div>
    </>
  );
};

export default NavBar;
