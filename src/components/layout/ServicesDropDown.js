import { MegaMenu, Navbar } from 'flowbite-react';
import { Link } from 'react-router-dom';

function ServicesDropdown() {
    const customTheme = {
        root: {
            base: "bg-white ",
        },
    };

    return (
        < MegaMenu theme={customTheme}>
            <Navbar.Toggle />
            <Navbar.Collapse >
                <MegaMenu.Dropdown toggle={<div className="text-lg font-semibold ">{"Services"}</div>}>

                    <div className="text-sm text-gray-500 md:grid-cols-3 md:px-6">
                        <ul className="space-y-4 sm:mb-4 md:mb-0 flex flex-col my-2">
                            <Link className=" " to="/Services/TechnicalSupply">Technical Ship Supply & Spare Parts</Link>
                            <Link className=" " to="/Services/RepairRetro" >Repair And Retrofit Services</Link>
                            <Link className=" " to="/Services/MarineAutomation" >Marine Automation Services</Link>
                            <Link className=" " to="/Services/DryDocking" >Dry-Docking Services</Link>
                        </ul>
                    </div>
                </MegaMenu.Dropdown>
            </Navbar.Collapse>
        </MegaMenu>
    )
}

export default ServicesDropdown