import { NavLink } from "react-router-dom";
import { links } from "../constants";

import { FiShoppingBag} from 'react-icons/fi';
import { useSideBar } from "../providers/sideBarProvider";


const SideBar = () => {

    const {isOpen} = useSideBar();

    return (
        <nav className={`fixed top-0 ${isOpen ? "medium-screen-open-sidebar" : "medium-screen-close-sidebar"} hidden md:block pb-6 overflow-y-auto medium-screen-sidebar-width h-screen bg-white px-2 pl-3`}>
            <div className="gap-2 pt-3 mb-3 text-sm flex-items">
                <img src="../data/avatar.jpg" alt="" />
                <p className="font-semibold">Shoppy</p>
            </div>
            <div className="flex flex-col gap-1">
                {links.map(({ title, links }, index) => {
                    return (
                        <div key={index}>
                            <span className="text-[13px] font-semibold text-[#9ca3af] inline-block pb-4">
                                {title}
                            </span>
                            <div className="text-[13px] flex-items flex-col gap-2 mx-2 my-1 -mt-3">
                                {links.map(({ name }, index) => {
                                    return (
                                        <NavLink key={index} to={`/${name}`} className="w-full gap-2 p-1 text-gray-700 rounded-md flex-items">
                                            <div>
                                                <FiShoppingBag />
                                            </div>
                                            <p className="capitalize"> {name} </p>
                                        </NavLink>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
        </nav>
    );
};

export default SideBar;
