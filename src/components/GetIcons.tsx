import { AiOutlineCalendar, AiOutlineShoppingCart, AiOutlineAreaChart, AiOutlineBarChart, AiOutlineStock } from 'react-icons/ai';
import { BsKanban } from 'react-icons/bs';
import { BiColorFill } from 'react-icons/bi';
import { RiContactsLine, RiStockLine } from 'react-icons/ri';
import { GiLouvrePyramid } from 'react-icons/gi';
import { FiEdit, FiPieChart, FiShoppingBag } from 'react-icons/fi';
import { useTheme } from '../providers/ThemeProvider';

const GetIcons = ({type} : {type : string}) => {

    const {isDark} = useTheme();

    switch(type) {
        case "ecommerce" : return <FiShoppingBag color={isDark ? "white" : ""} />
        case "orders" : return <AiOutlineShoppingCart color={isDark ? "white" : ""} />
        case "employees" : return <AiOutlineShoppingCart color={isDark ? "white" : ""} />
        case "customers" : return < RiContactsLine color={isDark ? "white" : ""}/>
        case "calendar" : return < AiOutlineCalendar color={isDark ? "white" : ""}/>
        case "kanban" : return < BsKanban color={isDark ? "white" : ""}/>
        case "editor" : return < FiEdit color={isDark ? "white" : ""}/>
        case "color-picker" : return < BiColorFill color={isDark ? "white" : ""}/>
        case "line" : return < AiOutlineStock color={isDark ? "white" : ""}/>
        case "area" : return < AiOutlineAreaChart color={isDark ? "white" : ""}/>
        case "bar" : return < AiOutlineBarChart color={isDark ? "white" : ""}/>
        case "pie" : return < FiPieChart color={isDark ? "white" : ""}/>
        case "financial" : return < RiStockLine color={isDark ? "white" : ""}/>
        case "pyramid" : return < GiLouvrePyramid color={isDark ? "white" : ""}/>
        case "stacked" : return < AiOutlineBarChart color={isDark ? "white" : ""}/>
        default : return < AiOutlineStock color={isDark ? "white" : ""}/>
    }
}

export default GetIcons