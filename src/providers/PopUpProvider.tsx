import { createContext, useContext, useState } from "react";
import type { PopUpProviderProps } from "../types";

const PopUpContext = createContext({} as PopUpProviderProps)

const PopUpProvider = ({ children }: { children: React.ReactNode }) => {

    const [messageStatus, setMessageStatus] = useState<boolean>(false);

    const [notificationStatus, setNotificationStatus] = useState<boolean>(false)

    const [profileStatus, setProfileStatus] = useState<boolean>(false)

    return <PopUpContext.Provider value={{ messageStatus, setMessageStatus, 
    profileStatus, setProfileStatus,
    notificationStatus, setNotificationStatus }} >
        {children}
    </PopUpContext.Provider>
}

export default PopUpProvider

export const usePopUp = () => useContext(PopUpContext);