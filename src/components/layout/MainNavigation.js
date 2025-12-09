import { useState } from "react";
import { Link } from 'react-router-dom';
import logo from '../../assets/portlinelogo-mini.png'
import { Bars3Icon } from "@heroicons/react/24/outline";
import ServicesDropdown from "./ServicesDropDown";
import Dropdown, { DropdownItem } from "../common/Dropdown";
import { faGlobe,faChevronCircleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import InfoBar from "./InforBar.js";
import Button from "../common/Button.js";

const MainNavigation = () => {

    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <>
            <InfoBar/>
            <nav className={`bg-white w-full left-0 right-0 top-0 font-semibold border-b border-gray-200 text-lg ${toggleMenu ? " fixed" : ""}`}>
            <div className="max-w-7xl mx-auto w-full relative background " >
                <div className="flex mx-auto justify-between w-5/6 ">
                    {/* Primary menu and logo */}
                    <div className=" text-gray-800 flex items-center gap-16 my-12 ">
                        {/* logo */}
                        <div className="font-bold ease-in-out hover:scale-100 duration-500">                            
                            <Link className="hover:underline hover:scale-110 duration-300 flex font-semibold items-center gap-1" to="/Home">
                            <img src={logo} alt="" className="rounded-3xl" />
                             <span className="text-blue-800"> PORTLINE GLOBAL </span>
                                </Link>
                        </div>
                        {/* primary */}
                        <div className="hidden lg:flex xl:gap-12 gap-6 ease-in-out ">
                            <Link className="hover:underline hover:scale-110 duration-300 hover:text-teal-600 " to="/Home">{"Home"}</Link>
                            <Link className="hover:underline hover:scale-110 duration-300 hover:text-teal-600 " to="/Contact">{"Contact"}</Link>
                            <ServicesDropdown />
                            <Link className="hover:underline hover:scale-110 duration-300 hover:text-teal-600 " to="/Blog">{"Blog"}</Link>
                            <Link className="hover:underline hover:scale-110 duration-300 hover:text-teal-600 " to="/About">{"About"}</Link>
                        </div>
                    </div>
                    {/* secondary  */}
                     {/* <div className="hidden lg:flex gap-6">
                        <div className="lg:flex items-center xl:gap-6">
                            <div className="dark:bg-gray-500 lg:flex items-center gap-2 dark:bg-white" >
                                
                            </div>
                            <div className="flex">
                                <Button style="bg-green-400 dark:text-white text-white dark:border-0 ">{"contact.contact"}</Button>
                                
                            </div>
                        </div>
                    </div> */}
                    {/* Mobile navigation toggle */}
                    <div className="lg:hidden absolute top-[52px] right-40 ">
                        <button onClick={() => setToggleMenu(!toggleMenu)}>
                            <Bars3Icon className="h-6" />
                        </button>
                    </div>
                </div>
            </div>
            {/* mobile navigation */}
            <div
                className={`fixed z-10 w-full bg-gray-50 overflow-hidden flex flex-col lg:hidden gap-12 origin-top duration-700 ${!toggleMenu ? "h-0" : "h-full"
                    }`}
            >
                <div className=" mx-6">
                    <div className="flex flex-col gap-8 w-full font-bold tracking-wider  lg:flex items-start gap-2 ">
                        <Link className="hover:underline hover:scale-110 duration-300 hover:text-teal-600" to="/Home">{"Home"}</Link>                        
                        <Link className="hover:underline hover:scale-110 duration-300 hover:text-teal-600 " to="/Contact">{"Contact"}</Link>
                        <ServicesDropdown />
                        <Link className="hover:underline hover:scale-110 duration-300 hover:text-teal-600" to="/Blog">{"Blog"}</Link>
                        <Link className="hover:underline hover:scale-110 duration-300 hover:text-teal-600" to="/About">{"About"}</Link>
                    </div>
                    <div className="flex items-center mx-6 mt-8 gap-16">
                        <div className=" lg:flex gap-2" >                            
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        </>
    );
};

export default MainNavigation;