import { useLocation, useNavigate } from "react-router-dom";
import { useSideBar } from "../providers/sideBarProvider"
import { useTheme } from "../providers/ThemeProvider";

const NotFound = () => {

    const { isOpen } = useSideBar();

    const navigate = useNavigate();

    const location = useLocation();
    const path = location.pathname; 

    const pageName = path.split("/").filter(Boolean).pop();

    const { themeColors } = useTheme();

    return (
        <div className={` ${isOpen ? "medium-screen-open-navbar max-sm:small-screen-open-navbar" : " medium-screen-close-navbar max-sm:small-screen-open-navbar"} max-sm:top-1/2 max-sm:-translate-y-1/2 absolute grid place-items-center h-screen`}>
            <div className="w-[80%] bg-white h-[80%] grid place-items-center rounded-xl dark:bg-dark-2">
                <div className="flex flex-col items-center gap-3 dark:text-white "
                    style={{ color: themeColors }}
                >
                    <p className="font-bold text-[200px] max-sm:text-[100px] dark:text-white"
                        style={{ color: themeColors }}>404</p>
                    <p className="text-[20px] font-semibold flex flex-col items-center gap-1 mb-5">
                        <span className="text-[30px] text-yellow-300 dark:text-white">{pageName?.toUpperCase()} </span>
                        Page Not Found
                    </p>
                </div>
                <div className="flex items-center w-[80%] justify-between flex-row-reverse md:mb-3 -mb-5">
                    <button
                        onClick={() => navigate("/ecommerce")}
                        style={{ background: themeColors }}
                        className="px-3 py-2 font-semibold text-white rounded-xl "
                    >
                        Go To Home
                    </button>
                    <button
                        onClick={() => history.back()}
                        style={{ background: themeColors }}
                        className="px-6 py-2 font-semibold text-white rounded-xl" >
                        Back
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NotFound