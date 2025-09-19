import { FaTimes } from "react-icons/fa";
import { useTheme } from "../providers/ThemeProvider";
import { FaCheck } from "react-icons/fa6";
import { useEffect, useReducer } from "react";
import { themeColorsGr } from "../constants";
import reducer from "../reducers";
import type { ColorThemeProps } from "../types";

const ThemeSettings = () => {

    const { setThemeColors } = useTheme();

    const [themeColorsArr, dispatch] = useReducer(reducer, themeColorsGr)

    useEffect(() => {
        for (let i = 0; i < themeColorsArr.length; i++) {
            if (themeColorsArr[i].isChecked) {
                setThemeColors(themeColorsArr[i].color);
                break;
            } else {
                setThemeColors("#03c9d7");
            }
        }
    }, [themeColorsArr]);


    const handleThemeColor = (id: number) => {
        dispatch({
            type: "handled", payload: {
                id,
            }
        })
    };

    function ColorTheme({
        color,
        id,
        check,
    }: ColorThemeProps) {
        return (
            <span
                onClick={() => handleThemeColor(id)}
                className="w-[25px] h-[25px] rounded-full cursor-pointer flex items-center justify-center"
                style={{ backgroundColor: color }}
            >
                <FaCheck
                    className={`${check ? "block" : "hidden"}`}
                    size={15}
                    color="white"
                />
            </span>
        );
    }

    const { isThemeModalOpen, setIsThemeModalOpen } = useTheme();

    const { isDark, setIsDark, themeColors } = useTheme();

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add("dark");
            localStorage.theme = "dark"
            document.body.style.backgroundColor = "#20232A";
        } else {
            document.documentElement.classList.remove("dark");
            document.body.style.backgroundColor = "#ebe7e7";
            if(localStorage.theme) localStorage.theme = "light"
        }
    }, [isDark]);

    return (
        <>
            <div
                onClick={() => setIsThemeModalOpen(false)}
                className={`fixed top-0 left-0 w-[100%] h-[100%] bg-[rgba(0,0,0,0.5)] ${isThemeModalOpen ? "block" : "hidden"
                    }`}
            />
            <div
                className={`fixed top-0 right-0 w-[25%] max-sm:w-[100%] max-sm:p-3 h-[100%] z-20 bg-white dark:bg-dark-2 ${isThemeModalOpen ? "block" : "hidden"
                    }`}
            >
                <div className="m-3">
                    <div className={`pb-3 font-semibold `} style={{ color: themeColors }}>
                        <p>Settings</p>
                        <FaTimes
                            onClick={() => setIsThemeModalOpen(false)}
                            className="absolute cursor-pointer top-4 right-2 max-sm:right-4 max-sm:top-5"
                            size={15}
                        />
                    </div>
                    <hr />
                    <div className="pt-3">
                        <p
                            className="pb-1 text-gray-500 text-md dark:text-white"
                            style={{ color: themeColors }}
                        >
                            Theme Option
                        </p>
                        <div className="flex items-center gap-1 text-sm">
                            <input
                                type="radio"
                                id="light"
                                className="w-2.5"
                                name="theme"
                                checked={!isDark}
                                onChange={(e) => setIsDark(!e.target.checked)}
                            />
                            <label htmlFor="light" className="cursor-pointer dark:text-white">
                                Light
                            </label>
                        </div>
                        <div className="flex items-center gap-1 pb-3 text-sm">
                            <input
                                type="radio"
                                id="dark"
                                className="w-2.5"
                                name="theme"
                                onChange={(e) => setIsDark(e.target.checked)}
                                checked={isDark}
                            />
                            <label htmlFor="dark" className="cursor-pointer dark:text-white">
                                Dark
                            </label>
                        </div>
                        <hr />
                        <div className="pt-3">
                            <p
                                className="pb-1 text-gray-500 dark:text-white"
                                style={{ color: themeColors }}
                            >
                                Change Colors
                            </p>
                            <div className="gap-1 pt-1 flex-items">
                                {themeColorsArr.map(({ id, color, isChecked }) => (
                                    <ColorTheme
                                        key={id}
                                        check={isChecked}
                                        color={color}
                                        id={id}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ThemeSettings;
