import { createContext, useContext, useState} from "react";
import type { SideBarContextProps } from "../types";

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
