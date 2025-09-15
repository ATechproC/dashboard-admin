import { FaBars, FaSearch  } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { FiMessageSquare } from "react-icons/fi";
import { FaRegBell } from "react-icons/fa";
import { useSideBar } from "../providers/sideBarProvider";

function MobileNavBar() {

    const {setIsOpen, isOpen} = useSideBar();

    return (
        <div className={`${isOpen ? "small-screen-open-navbar" : "small-screen-close-navbar" } md:hidden relative`}>
            <div className="p-3 flex-between">
                <div className="gap-2 flex-items">
                    <FaBars 
                    onClick={() => setIsOpen(prev => !prev)}
                    size={17} color="rgb(3, 201, 215)" cursor={'pointer'} />
                    <FaSearch size={17} color="rgb(3, 201, 215)" cursor={'pointer'} />
                </div>
                <div className="gap-2 flex-items">
                    <FiShoppingCart size={17} color="rgb(3, 201, 215)" cursor={'pointer'} />
                    <FiMessageSquare size={17} color="rgb(3, 201, 215)" cursor={'pointer'} />
                    <FaRegBell size={17} color="rgb(3, 201, 215)" cursor={'pointer'} />
                </div>
            </div>
        </div>
    )
}

export default MobileNavBar