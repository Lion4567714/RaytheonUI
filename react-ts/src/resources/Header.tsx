// This file (and soon others like it) use TailwindCSS, a CSS framework. The idea is to make styling much much easier
// https://tailwindcss.com/

import React from 'react';
import './resource.css';

const Header: React.FC = () => {
    return (
        // Based off this amazing website: https://wickedblocks.dev/
        // Copying things from here will require some editing (namely class -> className), but helps otherwise

        <div className="w-full max-w-7xl">
            <div x-data="{ open: false }" className="flex flex-col max-w-screen-xl p-7 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
                <div className="flex flex-row items-center justify-between lg:justify-start">
                    <a href="./" className="text-3xl tracking-tighter text-red-600 transition duration-500 ease-in-out transform tracking-relaxed lg:pr-8">
                        <img className="inline" width="50" src={require('./raytheonSymbol.png')}></img>
                        <span> </span>
                        <span className="font-extrabold">Raytheon</span>
                        <span> </span>
                        <span className="font-semibold">UI</span>
                    </a>
                    <button className="rounded-lg md:hidden focus:outline-none focus:shadow-outline">
                        <svg fill="currentColor" viewBox="0 0 20 20" className="w-8 h-8">
                            <path x-show="!open" fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clip-rule="evenodd"></path>
                            <path x-show="open" fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                        </svg>
                    </button>
                </div>
                <nav className="flex-col flex-grow hidden md:flex md:justify-start md:flex-row">
                    <ul className="space-y-2 list-none lg:space-y-0 lg:items-center lg:inline-flex">
                        <li>
                            <a href="./" className="px-2 lg:px-6 py-6 text-lg border-b-2 border-transparent hover:border-red-600 leading-[22px] md:px-3 text-gray-500 hover:text-red-500"> Home
                            </a>
                        </li>
                        <li>
                            <a href="./charts" className="px-2 lg:px-6 py-6 text-lg border-b-2 border-transparent leading-[22px] md:px-3 text-gray-500 hover:text-red-500 hover:border-red-600"> Charts </a>
                        </li>
                        <li>
                            <a href="./about" className="px-2 lg:px-6 py-6 text-lg border-b-2 border-transparent hover:border-red-600 leading-[22px] md:px-3 text-gray-500 hover:text-red-500"> About <span className="hidden lg:inline"> Us </span>
                            </a>
                        </li>
                    </ul>
                </nav>


            </div>

            {/* <div className="h-20 bg-gradient-to-b from-red-500 to-white-50"></div> */}
        </div>
    );
};

export default Header;