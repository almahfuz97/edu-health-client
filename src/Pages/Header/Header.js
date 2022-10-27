import React, { useContext, useState } from "react";
import { Navigate, NavLink, useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import logo from '../../assets/logo512.png'

export default function Header() {
    const navigate = useNavigate();
    const [toggleBurger, setToggleBurger] = useState(false);
    const [toggleMode, setToggleMode] = useState(false);
    const [tooltip, setTooltip] = useState(false);


    // from auth context
    const { user, logOut } = useContext(AuthContext)


    //*** functions ***//
    const handleBurger = () => {
        setToggleBurger((prev) => !prev);
    };

    // logout
    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate('/')
            })
            .catch(() => {

            })
    }

    // handle dark mode/ligh mode toggle
    const handleToggleMode = () => {
        setToggleMode(prev => !prev);
    }

    // handle tooltip
    const handleTooltip = (num) => {
        num === 0 ? setTooltip(true) : setTooltip(false);
    }
    return (
        <div>
            <nav className="px-8 py-8 border shadow-sm shadow-green-500 flex justify-between items-center">
                <div className=" flex items-center">
                    <img src={logo} alt="logo" className="w-12 mr-3" />
                    <h1 className=" font-bold text-2xl text-green-500">Edu Health</h1>
                </div>
                <ul
                    className={`md:flex items-center z-50 space-y-4 md:space-y-0 md:space-x-5  md:visible absolute md:relative right-0 duration-500 md:mt-0 mt-96 md:mr-0  ${toggleBurger ? "mr-0" : "-mr-96"
                        } bg-slate-50  md:bg-transparent p-4 rounded`}
                >
                    <li
                        className=" hover:text-purple-400 text-green-600"
                    >
                        <NavLink
                            onClick={handleBurger}
                            to={"/courses"}
                            className={({ isActive }) =>
                                isActive
                                    ? "text-purple-400  ease duration-100"
                                    : "ease text-green-500 duration-100"
                            }
                        >
                            COURSES
                        </NavLink>{" "}
                    </li>

                    <li
                        className=" hover:text-purple-400 text-green-600"
                    >
                        <NavLink
                            onClick={handleBurger}
                            to={"/faq"}
                            className={({ isActive }) =>
                                isActive
                                    ? "text-purple-400  ease duration-100"
                                    : "ease text-green-500 duration-100"
                            }
                        >
                            FAQ
                        </NavLink>{" "}
                    </li>

                    <li
                        className=" hover:text-purple-400 text-green-600"
                    >
                        <NavLink
                            onClick={handleBurger}
                            to={"/blog"}
                            className={({ isActive }) =>
                                isActive
                                    ? "text-purple-400  ease duration-100"
                                    : "ease text-green-500 duration-100"
                            }
                        >
                            BLOG
                        </NavLink>{" "}
                    </li>

                    {
                        !user?.uid ?
                            <li
                                className=" hover:text-purple-400 text-green-600"
                            >
                                <NavLink
                                    onClick={handleBurger}
                                    to={"/login"}
                                    className={({ isActive }) =>
                                        isActive
                                            ? "text-purple-400  ease duration-100"
                                            : "ease text-green-500 duration-100"
                                    }
                                >
                                    Login
                                </NavLink>{" "}
                            </li>
                            :
                            <li
                                onClick={handleLogOut}
                                className="mr-6 cursor-pointer hover:text-purple-400 text-green-600"
                            >
                                LOG OUT
                            </li>
                    }

                    {/* user profile */}
                    {
                        user?.uid &&
                        <li className="relative flex items-center ">
                            <img onMouseLeave={() => handleTooltip(1)} onMouseEnter={() => handleTooltip(0)} src={user?.photoURL} alt="" className="w-8 rounded-full cursor-pointer " />

                            <p className={`px-0 w-16 ${tooltip ? 'visible' : 'hidden'} text-xs bg-transparent drop-shadow font-bold absolute -translate-y-8`}>{user?.displayName}</p>

                        </li>}

                    {/* toggle mode, dark/light */}
                    <li className=" flex text-green-500 space-x-2 ">
                        <small>Light</small>
                        <div className={` cursor-pointer relative 
                        ${toggleMode ? 'bg-white' : 'bg-black'} 
                        border h-6 w-12 rounded-full   `}>

                            <div onClick={handleToggleMode}
                                className={`${toggleMode ? 'bg-black' : 'bg-slate-200'} left-0 top-0 bottom-0 w-6 h-6 absolute  
                            ${toggleMode ? 'translate-x-6' : 'traslate-x-0'} duration-500 rounded-full 
                            `}>
                            </div>
                        </div>
                        <small>Dark</small>
                    </li>

                </ul>

                {/* making hamburger */}
                <div
                    onClick={handleBurger}
                    className=" md:hidden relative cursor-pointer p-2"
                >
                    <div
                        className={`w-6 h-0.5  duration-300 mb-1 bg-green-500  ${toggleBurger
                            ? "rotate-45 origin-center absolute right-0.5 p-0.5"
                            : "rotate-0 relative"
                            }`}
                    ></div>
                    <div
                        className={`w-6 h-0.5 duration-300 mb-1 bg-green-500  ${toggleBurger ? "hidden" : "visible"
                            }`}
                    ></div>
                    <div
                        className={`w-6 h-0.5 mb-1 duration-300 bg-green-500  ${toggleBurger
                            ? "-rotate-45 origin-center absolute right-0.5 p-0.5"
                            : "rotate-0 relative"
                            }`}
                    ></div>
                </div>
            </nav>
        </div>
    );
}