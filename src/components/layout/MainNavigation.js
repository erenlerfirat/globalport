import { useState } from "react";
import { Link } from 'react-router-dom';
import Button from "../common/Button";
import logo from '../../assets/portlinelogo-mini.png'
import {
    MoonIcon,
    SunIcon,
    Bars3Icon,
} from "@heroicons/react/24/outline";
import ServicesDropdown from "./ServicesDropDown";
import Dropdown, { DropdownItem } from "../common/Dropdown";
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const MainNavigation = () => {

    const [toggleMenu, setToggleMenu] = useState(false);

    return (
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
                            <Link className="hover:underline hover:scale-110 duration-300" to="/Home">{"Home"}</Link>
                            <ServicesDropdown />
                            <Link className="hover:underline hover:scale-110 duration-300" to="/Blog">{"Blog"}</Link>
                            <Link className="hover:underline hover:scale-110 duration-300" to="/About">{"About"}</Link>
                        </div>
                    </div>
                    {/* secondary */}
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
                className={`fixed z-40 w-full bg-gray-50 overflow-hidden flex flex-col lg:hidden gap-12 origin-top duration-700 dark:bg-gray-600 ${!toggleMenu ? "h-0" : "h-full"
                    }`}
            >
                <div className=" mx-6">
                    <div className="flex flex-col gap-8 w-full font-bold tracking-wider  lg:flex items-start gap-2  ">
                        <Link className="hover:underline hover:scale-110 duration-300" to="/Home">{"home"}</Link>
                        <Link className="hover:underline hover:scale-110 duration-300" to="/Services">{"services"}</Link>
                        <ServicesDropdown />
                        <Link className="hover:underline hover:scale-110 duration-300" to="/Blog">{"blog"}</Link>
                        <Link className="hover:underline hover:scale-110 duration-300" to="/About">{"about"}</Link>
                    </div>
                    <div className="flex items-center mx-6 mt-8 gap-16">
                        <div className=" lg:flex gap-2" >                            
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default MainNavigation;