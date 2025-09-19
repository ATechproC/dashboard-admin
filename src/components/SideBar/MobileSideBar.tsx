import { useSideBar } from "../../providers/sideBarProvider";
import SideBarComp from "./SideBarComp";

function MobileSideBar() {
    const { isOpen } = useSideBar();

    return (
        <SideBarComp
            styles={`fixed z-20 top-0 ${isOpen ? "small-screen-open-sidebar" : "small-screen-close-sidebar"
                } md:hidden pb-6 overflow-y-auto small-screen-sidebar-width h-screen bg-white px-2 pl-3`}
            timesStatus={true}
        />
    );
}

export default MobileSideBar;
