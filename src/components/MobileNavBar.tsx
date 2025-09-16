import { FaBars, FaSearch } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { FiMessageSquare } from "react-icons/fi";
import { FaRegBell } from "react-icons/fa";
import { useSideBar } from "../providers/sideBarProvider";
import { assets } from "../constants";
import { usePopUp } from "../providers/PopUpProvider";
import PopUp from "./PopUp";

function MobileNavBar() {

    const { setIsOpen, isOpen } = useSideBar();
    const { setMessageStatus, setNotificationStatus, setProfileStatus } = usePopUp();

    return (
        <div className={`${isOpen ? "small-screen-open-navbar" : "small-screen-close-navbar"} md:hidden relative`}>
            <div className="p-3 flex-between">
                <div className="gap-2 flex-items">
                    <FaBars
                        onClick={() => setIsOpen(prev => !prev)}
                        size={17} color="rgb(3, 201, 215)" cursor={'pointer'} />
                    <FaSearch size={17} color="rgb(3, 201, 215)" cursor={'pointer'} />
                </div>
                <div className="gap-2 flex-items">
                    <PopUp />
                    <FiShoppingCart size={17} color="rgb(3, 201, 215)" cursor={'pointer'} />
                    <div className="relative">
                        <FiMessageSquare size={17} color="rgb(3, 201, 215)" cursor={'pointer'}
                            onClick={() => {
                                setMessageStatus(prev => !prev);
                                // setPopUpStatus("message");
                                setNotificationStatus(false);
                                setProfileStatus(false)
                            }}
                        />
                        <span className="absolute -top-[1px] -right-[1px] w-[6px] h-[6px] bg-[#03c9d7] rounded-full" />
                    </div>
                    <div className="relative">
                        <FaRegBell size={17} color="rgb(3, 201, 215)" cursor={'pointer'}
                            onClick={() => {
                                setNotificationStatus(prev => !prev);
                                // setPopUpStatus("notification")
                                setMessageStatus(false)
                                setProfileStatus(false)
                            }}
                        />
                        <span className="absolute -top-[5px] right-0 w-[6px] h-[6px] bg-yellow-500 rounded-full" />
                    </div>
                    <div
                        onClick={() => {
                            setNotificationStatus(false);
                            setMessageStatus(false);
                            setProfileStatus(prev => !prev)
                        }}
                    >
                        <img src={assets.avatar} className="w-8 h-8 rounded-full" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobileNavBar