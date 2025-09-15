import { FaBars, FaSearch  } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { FiMessageSquare } from "react-icons/fi";
import { FaRegBell } from "react-icons/fa";
import { useSideBar } from "../providers/sideBarProvider";

function NavBarComp({status, open, close} : {status : boolean, open : string, close : string}) {

    const {setIsOpen} = useSideBar();

    return (
        <div className={`${status ? open : close } md:hidden relative`}>
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

export default NavBarComp