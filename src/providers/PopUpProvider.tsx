import { createContext, useContext, useState, type SetStateAction } from "react";

interface PopUpProviderProps {
    messageStatus: boolean;
    setMessageStatus: React.Dispatch<SetStateAction<boolean>>;

    // PopUpStatus: string;
    // setPopUpStatus: React.Dispatch<SetStateAction<string>>

    notificationStatus: boolean;
    setNotificationStatus: React.Dispatch<SetStateAction<boolean>>;

    profileStatus : boolean;
    setProfileStatus : React.Dispatch<SetStateAction<boolean>>;

}

const PopUpContext = createContext({} as PopUpProviderProps)

const PopUpProvider = ({ children }: { children: React.ReactNode }) => {

    const [messageStatus, setMessageStatus] = useState<boolean>(false);

    const [notificationStatus, setNotificationStatus] = useState<boolean>(false)

    const [profileStatus, setProfileStatus] = useState<boolean>(false)

    // const [PopUpStatus, setPopUpStatus] = useState<string>("")

    return <PopUpContext.Provider value={{ messageStatus, setMessageStatus, 
    // PopUpStatus, setPopUpStatus, 
    profileStatus, setProfileStatus,
    notificationStatus, setNotificationStatus }} >
        {children}
    </PopUpContext.Provider>
}

export default PopUpProvider

export const usePopUp = () => useContext(PopUpContext);