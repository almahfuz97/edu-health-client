import React, { useContext, useState } from "react";
import { Navigate, NavLink, useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import logo from '../../assets/logo512.png'
import { FaSpinner } from "react-icons/fa";

export default function Header() {
    const navigate = useNavigate();
    const [toggleBurger, setToggleBurger] = useState(false);
    const [toggleMode, setToggleMode] = useState(false);
    const [tooltip, setTooltip] = useState(false);


    // from auth context
    const { user, logOut, loading } = useContext(AuthContext)


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
        console.log(num)
        num === 0 ? setTooltip(true) : setTooltip(false);
    }

    // handleLogoClick
    const handleLogoClick = () => {
        navigate('/');
    }

    // if (!loading) {
    //     return (<div className=' text-3xl text-center font-bold mt-16 flex justify-center animate-spin'> <FaSpinner></FaSpinner> </div>)
    // }
    return (
        <div>
            <nav className="px-8 py-8 border shadow-sm shadow-green-500 flex justify-between items-center ">
                <div onClick={handleLogoClick} className=" flex items-center cursor-pointer">
                    <img src={logo} alt="logo" className="w-12 md:w-10 lg:w-12 mr-3" />
                    <h1 className=" font-bold text-2xl md:text-xl lg:text-2xl text-green-500">Edu Health</h1>
                </div>
                <ul
                    className={`md:flex items-center md:opacity-100 md:visible  z-50 space-y-4 md:space-y-0 md:space-x-5 absolute md:relative right-0 duration-500 md:mt-0 mt-1 top-28 md:top-0 ${toggleBurger ? "visible opacity-100" : "opacity-0 md:opacity-100 invisible"
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

                    {/* user profile */}
                    {
                        loading ?
                            <li className={`relative flex items-center ${!user?.uid && 'hidden'}`}>
                                <div className="relative flex items-center">
                                    <img onMouseLeave={() => handleTooltip(1)} onMouseEnter={() => handleTooltip(0)} src={user?.photoURL} alt='' className="w-8 rounded-full cursor-pointer z-10 bg-transparent" />

                                    {/* default profile pic if photo url has no valid pic */}
                                    <img onMouseLeave={() => handleTooltip(1)} onMouseEnter={() => handleTooltip(0)} src="https://t3.ftcdn.net/jpg/03/46/83/96/240_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" alt='' className="w-8 rounded-full cursor-pointer absolute " />
                                </div>


                                <p className={`px-0 w-16 ${tooltip ? 'visible' : 'hidden'} text-xs bg-transparent drop-shadow font-bold absolute -translate-y-8`}>{user?.displayName}</p>

                            </li>
                            :
                            <li>
                                <div className=' text-2xl text-center font-bold flex justify-center animate-spin'> <FaSpinner></FaSpinner> </div>
                            </li>

                    }

                    {/* login | logout */}
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
                                    LOGIN
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

                    {/* toggle mode, dark/light */}
                    <li className=" flex items-center text-green-500 space-x-2 ">
                        <p>LIGHT</p>
                        <div className={` cursor-pointer relative 
                        bg-green-500 
                        border h-6 w-12 rounded-full flex items-center  `}>

                            <div onClick={handleToggleMode}
                                className={`${toggleMode ? 'bg-slate-700' : 'bg-slate-100'} w-6 h-6 absolute shadow 
                            ${toggleMode ? 'translate-x-6' : 'traslate-x-0'} duration-500 rounded-full 
                            `}>
                            </div>
                        </div>
                        <p>DARK</p>
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