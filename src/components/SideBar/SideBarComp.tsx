import { FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useSideBar } from "../../providers/sideBarProvider";
import { useTheme } from "../../providers/ThemeProvider";
import { links } from "../../constants";
import GetIcons from "../GetIcons";
import type { SideBarCompProps } from "../../types";

const SideBarComp = ({ styles, timesStatus }: SideBarCompProps) => {

    const { setIsOpen } = useSideBar();

    const { themeColors } = useTheme();

    return (
        <nav className={`${styles} dark:bg-dark-2`}>
            <FaTimes
                className="absolute cursor-pointer top-4 right-2"
                size={15}
                style={{ color: themeColors }}
                onClick={() => setIsOpen(timesStatus)}
            />
            <div className="gap-2 pt-3 mb-3 text-sm flex-items">
                <img src="../data/avatar.jpg" alt="" />
                <p className="font-bold"
                    style={{ color: themeColors }}>Shoppy</p>
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
                                        <NavLink
                                            style={({ isActive }) => ({
                                                backgroundColor: isActive ? themeColors : '',
                                            })}
                                            key={index}
                                            to={`/${name}`}
                                            className="w-full gap-2 p-1 text-gray-700 rounded-md flex-items"
                                            onClick={() => setIsOpen(true)}
                                        >
                                            <div>
                                                <GetIcons type={name} />
                                            </div>
                                            <p className="capitalize dark:text-white"> {name} </p>
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

export default SideBarComp;
