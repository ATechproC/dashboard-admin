import { createContext, useContext, useState} from "react";

interface SideBarContextProps {
  isOpen : boolean;
  setIsOpen : React.Dispatch<React.SetStateAction<boolean>>
}

const SideBarContext = createContext({} as SideBarContextProps);

export const SideBarProvider = ({children} : {children : React.ReactNode}) => {

  const [isOpen, setIsOpen] = useState<boolean>(true)

  return <SideBarContext.Provider value={{isOpen, setIsOpen}} >
    {children}
  </SideBarContext.Provider>

}

export const useSideBar = () => {
  return useContext(SideBarContext);
}
