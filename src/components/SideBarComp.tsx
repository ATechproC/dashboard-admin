import { FaTimes } from "react-icons/fa";
import { useSideBar } from "../providers/sideBarProvider";
import { links } from "../constants";
import { NavLink } from "react-router-dom";
import GetIcons from "./GetIcons";

const SideBarComp = ({ styles, timesStatus }: { styles: string, timesStatus : boolean }) => {
    const { setIsOpen } = useSideBar();

    return (
        <nav className={styles}>
            <FaTimes
                className="absolute cursor-pointer top-4 right-2"
                size={15}
                color="rgb(3, 201, 215)"
                onClick={() => setIsOpen(timesStatus)}
            />
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
                                        <NavLink
                                            key={index}
                                            to={`/${name}`}
                                            className="w-full gap-2 p-1 text-gray-700 rounded-md flex-items"
                                        >
                                            <div>
                                                <GetIcons type={name} />
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

export default SideBarComp;
