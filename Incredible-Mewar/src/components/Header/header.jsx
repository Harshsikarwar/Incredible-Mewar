import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header(){
    return(
        <div className="top-* bg-black">
            <nav>
                <div className="flex flex-wrap items-center">
                    <Link to="/">
                    <img src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                    className="h-12 w-12 m-2"
                    ></img>
                    </Link>
                    <h1 className="text-white font-bold font-sans mr-12 text-2xl">Incredible Mewar</h1>
                    <div>
                        <ul className="flex flex-col mt-4 lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                to="/"
                                className={({isActive}) =>
                                    `font-bold text-xl font-mono
                                    ${isActive ? "text-white" : "text-gray-700" } hover:text-red-400`
                                }>
                                    Home
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                to="/about"
                                className={({isActive}) =>
                                    `font-bold text-xl font-mono
                                    ${isActive ? "text-white" : "text-gray-700" } hover:text-red-400`
                                }>
                                    About
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )

}