import { useSideBar } from "../../providers/sideBarProvider";
import SideBarComp from "./SideBarComp";


const SideBar = () => {
    const { isOpen } = useSideBar();

    return (
        <SideBarComp
            styles={`fixed z-20 top-0 ${isOpen ? "medium-screen-open-sidebar" : "medium-screen-close-sidebar"
                } hidden md:block pb-6 overflow-y-auto medium-screen-sidebar-width h-screen bg-white px-2 pl-3`}
            timesStatus={false}
        />
    );
};

export default SideBar;
