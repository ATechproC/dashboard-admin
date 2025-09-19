
import { assets, messagesData, notificationData } from "../constants";
import { usePopUp } from "../providers/PopUpProvider"
import PopUpComp from "./PopUpComp";

const PopUp = () => {
    
    const { messageStatus, notificationStatus, profileStatus, setMessageStatus, setNotificationStatus, setProfileStatus } = usePopUp();

    return <>
    
        {/* Message  */}
        <PopUpComp
            PopUpStatus={messageStatus}
            status="message"
            setPopStatus={setMessageStatus}
            myBtnContent="Send all messages"
            right="right-20"
            data={messagesData}
        />

        {/* Notifications  */}
        <PopUpComp
            PopUpStatus={notificationStatus}
            status="notifications"
            setPopStatus={setNotificationStatus}
            myBtnContent="See all notifications"
            right="right-14"
            data={notificationData}
        />
        
        {/* profile setting */}
        <PopUpComp
            PopUpStatus={profileStatus}
            status="User Profile"
            setPopStatus={setProfileStatus}
            myBtnContent="Log out"
            right="right-8"
        >
            <div className="justify-around pt-4 flex-items">
                <div className="w-[50px] h-[50px] ml-6 rounded-full overflow-hidden">
                    <img src={assets.avatar} alt="" className="w-full h-full object-content" />
                </div>
                <div>
                    <p className="font-semibold text-[18px] dark:text-white">Anass Choraichi</p>
                    <div className="text-[14px] ml-3 text-gray-400">
                        <p>Administrator</p>
                        <p>info@shop.com</p>
                    </div>
                </div>
            </div>
        </PopUpComp>
    </>
}

export default PopUp