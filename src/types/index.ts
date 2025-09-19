import type { SetStateAction } from "react";

export interface PopUpProviderProps {
    messageStatus: boolean;
    setMessageStatus: React.Dispatch<SetStateAction<boolean>>;

    notificationStatus: boolean;
    setNotificationStatus: React.Dispatch<SetStateAction<boolean>>;

    profileStatus: boolean;
    setProfileStatus: React.Dispatch<SetStateAction<boolean>>;
}

export interface SideBarContextProps {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export interface ThemeProps {
    isThemeModalOpen: boolean;
    isDark: boolean;
    setIsThemeModalOpen: React.Dispatch<SetStateAction<boolean>>;
    setIsDark: React.Dispatch<SetStateAction<boolean>>;
    themeColors: string;
    setThemeColors: React.Dispatch<SetStateAction<string>>
}

export interface SparkLineProps {
    id: string;
    height: string;
    width: string;
    color: string;
    data: { x: number; yval: number }[];
    type: "Line" | "Column" | "WinLoss"; // restrict to valid Sparkline types
    currentColor: string;
}

export interface PopUpProps {
    PopUpStatus: boolean;
    status: string;
    setPopStatus: React.Dispatch<SetStateAction<boolean>>;
    myBtnContent: string;
    right: string;
    data?: any[];
    children?: React.ReactNode;
}

export interface HeaderProps {
    category: string;
    title: string
}

export interface SideBarCompProps { styles: string, timesStatus: boolean }

export interface ChartsHeaderProps {
    category : string;
    title : string;
}