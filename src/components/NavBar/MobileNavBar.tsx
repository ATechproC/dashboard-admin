import { useSideBar } from "../../providers/sideBarProvider";
import NavBarComp from "./NavBarComp";

function MobileNavBar() {
    const { isOpen } = useSideBar();

    return (
        <NavBarComp
            styles={`${isOpen ? 
                "small-screen-open-navbar" : 
                "small-screen-close-navbar"
                } md:hidden fixed z-20 backdrop-blur-md `
            }
        />
    );
}

export default MobileNavBar;
