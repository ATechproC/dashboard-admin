import { FaBars } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { FiMessageSquare } from "react-icons/fi";
import { FaRegBell } from "react-icons/fa";
import { useSideBar } from "../../providers/sideBarProvider";
import { useTheme } from "../../providers/ThemeProvider";
import PopUp from "../PopUp";
import { assets } from "../../constants";
import { usePopUp } from "../../providers/PopUpProvider";

function NavBarComp({ styles }: { styles: string }) {
    const { setIsOpen } = useSideBar();
    const { setMessageStatus, setNotificationStatus, setProfileStatus } =
        usePopUp();

    const { themeColors } = useTheme();

    return (
        <div className={styles}>
            <div className="p-3 flex-between">
                <div className="gap-2 flex-items">
                    <FaBars
                        onClick={() => setIsOpen((prev) => !prev)}
                        style={{ color: themeColors }}
                        size={17}
                        cursor={"pointer"}
                    />
                </div>
                <div className="relative gap-2 flex-items">
                    <PopUp />
                    <FiShoppingCart
                        size={17}
                        style={{ color: themeColors }}
                        cursor={"pointer"}
                    />
                    <div className="relative">
                        <FiMessageSquare
                            size={17}
                            style={{ color: themeColors }}
                            cursor={"pointer"}
                            onClick={() => {
                                setMessageStatus((prev) => !prev);
                                setNotificationStatus(false);
                                setProfileStatus(false);
                            }}
                        />
                        <span
                            className="absolute -top-[1px] -right-[1px] w-[6px] h-[6px] rounded-full"
                            style={{ backgroundColor: themeColors }}
                        />
                    </div>
                    <div className="relative">
                        <FaRegBell
                            size={17}
                            style={{ color: themeColors }}
                            cursor={"pointer"}
                            onClick={() => {
                                setNotificationStatus((prev) => !prev);
                                setMessageStatus(false);
                                setProfileStatus(false);
                            }}
                        />
                        <span className="absolute -top-[5px] right-0 w-[6px] h-[6px] bg-yellow-500 rounded-full" />
                    </div>
                    <div
                        className="w-[25px] h-[25px] rounded-full overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.5)] cursor-pointer z-10"
                        onClick={() => {
                            setNotificationStatus(false);
                            setMessageStatus(false);
                            setProfileStatus((prev) => !prev);
                        }}
                    >
                        <img
                            src={assets.avatar}
                            className="w-full h-full object-content"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavBarComp;
