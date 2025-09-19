import { nanoid } from "nanoid";
import { FaTimes } from "react-icons/fa";
import { useTheme } from "../providers/ThemeProvider";
import { usePopUp } from "../providers/PopUpProvider";
import type { PopUpProps } from "../types";

const PopUpComp = ({
    PopUpStatus,
    status,
    setPopStatus,
    myBtnContent,
    right,
    data,
    children,
}: PopUpProps) => {
    const { themeColors } = useTheme();

    const { setMessageStatus, setNotificationStatus, setProfileStatus } = usePopUp();

    return (
        <>
            <div className={`${PopUpStatus ? "block" : "hidden"} fixed top-0 left-0 w-full h-screen`}
                onClick={() => {
                    setMessageStatus(false);
                    setNotificationStatus(false);
                    setProfileStatus(false)
                }}
            />
            <div
                className={`${PopUpStatus ? "block" : "hidden"
                    } z-10 fixed top-10 ${right} p-3 text-sm w-[300px] max-sm:w-[260px] bg-white rounded-md dark:bg-dark-1`}
            >
                <div>
                    <p className="font-semibold" style={{ color: themeColors }}>
                        {status}
                    </p>
                    <FaTimes
                        className="absolute cursor-pointer top-3 right-2.5"
                        style={{ color: themeColors }}
                        size={15}
                        color="rgb(3, 201, 215)"
                        onClick={() => {
                            setPopStatus(false);
                        }}
                    />
                    {children !== undefined
                        ? children
                        : data?.map(({ image, message, desc, time }) => {
                            return (
                                <div
                                    key={nanoid()}
                                    className="mt-4 rounded-md bg-gray-50 gap-14 max-sm:gap-4 flex-items dark:bg-dark-2 p-[2px]"
                                >
                                    <div className="w-[35px] h-[35px] ml-6 rounded-full overflow-hidden">
                                        <img
                                            src={image}
                                            alt=""
                                            className="w-full h-full overflow-hidden"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2 ">
                                        <p className="font-semibold text-[13px] dark:text-white"> {message} </p>
                                        <div className="-mt-2">
                                            <p className="text-sm text-gray-500 dark:text-gray-400"> {desc} </p>
                                            {!!time && (
                                                <p className="text-sm text-gray-500">{time}</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                </div>
                <button className="w-full p-2 mt-4 text-white rounded-md bg-[#03c9d7]"
                    style={{ backgroundColor: themeColors }}>
                    {myBtnContent}
                </button>
            </div>
        </>
    );
};

export default PopUpComp;
