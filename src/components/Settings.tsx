import { FiSettings } from "react-icons/fi";
import { useTheme } from "../providers/ThemeProvider";

const Settings = () => {
    const { setIsThemeModalOpen, themeColors } = useTheme();

    return (
        <div
            className="fixed z-20 p-2 transition rounded-full cursor-pointer bottom-4 right-3 hover:shadow-md"
            style={{ backgroundColor: themeColors }}
        >
            <FiSettings
                onClick={() => setIsThemeModalOpen(true)}
                className="text-white w-[20px] h-[20px]"
                cursor="pointer"
            />
        </div>
    );
};

export default Settings;
