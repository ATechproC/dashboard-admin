import { useSideBar } from "../../providers/sideBarProvider";
import NavBarComp from "./NavBarComp";

function NavBar() {

    const { isOpen } = useSideBar()

    return  <NavBarComp
            styles={`${isOpen ?
                "medium-screen-open-navbar" : 
                "medium-screen-close-navbar"} 
                hidden md:block fixed z-20`
            }
        />
}

export default NavBar