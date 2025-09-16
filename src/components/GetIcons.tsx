import React from 'react';
import { AiOutlineCalendar, AiOutlineShoppingCart, AiOutlineAreaChart, AiOutlineBarChart, AiOutlineStock } from 'react-icons/ai';
import { BsKanban, BsBarChart, BsBoxSeam, BsCurrencyDollar, BsShield, BsChatLeft } from 'react-icons/bs';
import { BiColorFill } from 'react-icons/bi';
import { IoMdContacts } from 'react-icons/io';
import { RiContactsLine, RiStockLine } from 'react-icons/ri';
import { MdOutlineSupervisorAccount } from 'react-icons/md';
import { HiOutlineRefresh } from 'react-icons/hi';
import { TiTick } from 'react-icons/ti';
import { GiLouvrePyramid } from 'react-icons/gi';
import { GrLocation } from 'react-icons/gr';
import { FiEdit, FiPieChart, FiShoppingBag } from 'react-icons/fi';

const GetIcons = ({type} : {type : string}) => {
    switch(type) {
        case "ecommerce" : return <FiShoppingBag />
        case "orders" : return <AiOutlineShoppingCart />
        case "employees" : return <AiOutlineShoppingCart />
        case "customers" : return < RiContactsLine/>
        case "calendar" : return < AiOutlineCalendar/>
        case "kanban" : return < BsKanban/>
        case "editor" : return < FiEdit/>
        case "color-picker" : return < BiColorFill/>
        case "line" : return < AiOutlineStock/>
        case "area" : return < AiOutlineAreaChart/>
        case "bar" : return < AiOutlineBarChart/>
        case "pie" : return < FiPieChart/>
        case "financial" : return < RiStockLine/>
        case "pyramid" : return < GiLouvrePyramid/>
        case "stacked" : return < AiOutlineBarChart/>
        default : return < AiOutlineStock/>
    }
}

export default GetIcons