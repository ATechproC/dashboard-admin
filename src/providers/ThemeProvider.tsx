import { createContext, useContext, useState, type ReactNode } from "react";
import type { ThemeProps } from "../types";

const ThemeContext = createContext({} as ThemeProps)

const ThemeProvider = ({ children }: { children: ReactNode }) => {

    const [isThemeModalOpen, setIsThemeModalOpen] = useState<boolean>(false);

    const [themeColors, setThemeColors] = useState<string>("#03c9d7")

    const [isDark, setIsDark] = useState<boolean>(false);

    return <ThemeContext.Provider value={{ 
    isThemeModalOpen,setIsThemeModalOpen,
    isDark, setIsDark,
    themeColors, setThemeColors
    }}>
        {children}
    </ThemeContext.Provider>
}

export default ThemeProvider;

export const useTheme = () => useContext(ThemeContext);