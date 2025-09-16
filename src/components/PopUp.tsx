import { FaTimes } from "react-icons/fa";
import { assets, chatData } from "../constants";
import { usePopUp } from "../providers/PopUpProvider"
import { nanoid } from 'nanoid';


const PopUp = () => {

    const { messageStatus, notificationStatus, profileStatus, setMessageStatus, setNotificationStatus, setProfileStatus } = usePopUp();

    return <>
        <div className={`${messageStatus ? "block" : "hidden"} z-10 absolute max-sm:top-12 top-8 right-16 p-3 text-sm w-[300px] max-sm:w-[260px] bg-white rounded-md`}>
            <div>
                <p className="font-semibold">message</p>
                <FaTimes
                    className="absolute cursor-pointer top-3 right-2.5"
                    size={15}
                    color="rgb(3, 201, 215)"
                    onClick={() => {
                        setMessageStatus(false)
                    }}
                />
                {chatData.map(({ image, message, desc, time }) => {
                    return <div key={nanoid()}
                        className="mt-4 bg-gray-50 gap-14 max-sm:gap-4 flex-items"
                    >
                        <div className="w-[35px] h-[35px] ml-6 rounded-full overflow-hidden">
                            <img src={image} alt="" className="w-full h-full overflow-hidden" />
                        </div>
                        <div className="flex flex-col gap-2 ">
                            <p className="font-semibold text-[13px]"> {message} </p>
                            <div className="-mt-2">
                                <p className="text-sm text-gray-500"> {desc} </p>
                                <p className="text-sm text-gray-500">{time} </p>
                            </div>
                        </div>
                    </div>
                })}
                <button className="w-full p-2 mt-4 text-white rounded-md bg-[#03c9d7]">
                    Send all messages
                </button>
            </div>
        </div>
        <div className={`${notificationStatus ? "block" : "hidden"} z-10  absolute max-sm:top-12 top-8 right-10 p-3 text-sm w-[300px] max-sm:w-[260px] bg-white rounded-md`}>
            <div>
                <p className="font-semibold">notification</p>
                <FaTimes
                    className="absolute cursor-pointer top-3 right-2.5"
                    size={15}
                    color="rgb(3, 201, 215)"
                    onClick={() => {
                        setNotificationStatus(false)
                    }}
                />
                {chatData.map(({ image, message, desc }) => {
                    return <div key={nanoid()}
                        className="mt-4 bg-gray-50 gap-14 flex-items"
                    >
                        <div className="w-[35px] h-[35px] ml-6 rounded-full overflow-hidden">
                            <img src={image} alt="" className="w-full h-full overflow-hidden" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="font-semibold text-[13px]"> {message} </p>
                            <p className="-mt-1 text-sm text-gray-500"> {desc} </p>
                        </div>
                    </div>
                })}
                <button className="w-full p-2 mt-4 text-white rounded-md bg-[#03c9d7]">
                    See all notifications
                </button>
            </div>
        </div>
        <div className={`${profileStatus ? "block" : "hidden"} z-10  absolute max-sm:top-12 top-8 right-6 p-3 text-sm w-[300px] max-sm:w-[260px] bg-white rounded-md`}>
            <div>
                <p className="font-semibold">User Profile</p>
                <FaTimes
                    className="absolute cursor-pointer top-3 right-2.5"
                    size={15}
                    color="rgb(3, 201, 215)"
                    onClick={() => {
                        setProfileStatus(false)
                    }}
                />
                <div className="justify-around pt-4 flex-items">
                    <div className="w-[50px] h-[50px] ml-6 rounded-full overflow-hidden">
                        <img src={assets.avatar} alt="" className="w-full h-full object-content" />
                    </div>
                    <div>
                        <p className="font-semibold text-[18px]">Anass Choraichi</p>
                        <div className="text-[14px] ml-3 text-gray-400">
                            <p>Administrator</p>
                            <p>info@shop.com</p>
                        </div>
                    </div>
                </div>
                {/* {chatData.map(({ image, message, desc }) => {
                    return <div key={nanoid()}
                        className="mt-4 bg-gray-50 gap-14 flex-items"
                    >
                        <div className="w-[35px] h-[35px] ml-6 rounded-full overflow-hidden">
                            <img src={image} alt="" className="w-full h-full overflow-hidden" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="font-semibold text-[13px]"> {message} </p>
                            <p className="-mt-1 text-sm text-gray-500"> {desc} </p>
                        </div>
                    </div>
                })} */}
                <button className="w-full p-2 mt-4 text-white rounded-md bg-[#03c9d7]">
                    Log out
                </button>
            </div>
        </div>
    </>
}

export default PopUp