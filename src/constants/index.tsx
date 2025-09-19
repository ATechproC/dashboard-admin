// import React from 'react';
// import { AiOutlineCalendar, AiOutlineShoppingCart, AiOutlineAreaChart, AiOutlineBarChart, AiOutlineStock } from 'react-icons/ai';
// import { FiShoppingBag, FiEdit, FiPieChart, FiBarChart, FiCreditCard, FiStar, FiShoppingCart } from 'react-icons/fi';
// import { BsKanban, BsBarChart, BsBoxSeam, BsCurrencyDollar, BsShield, BsChatLeft } from 'react-icons/bs';
// import { BiColorFill } from 'react-icons/bi';
// import { IoMdContacts } from 'react-icons/io';
// import { RiContactsLine, RiStockLine } from 'react-icons/ri';
// import { MdOutlineSupervisorAccount } from 'react-icons/md';
// import { HiOutlineRefresh } from 'react-icons/hi';
// import { TiTick } from 'react-icons/ti';
// import { GiLouvrePyramid } from 'react-icons/gi';
import { GrLocation } from 'react-icons/gr';

export const gridOrderImage = (props : {ProductImage : string}) => {
    return (
        <div>
            <img
                className="h-20 rounded-xl md:ml-3"
                src={props.ProductImage}
                alt="order-item"
            />
        </div>
    )
};

export const gridOrderStatus = (props : {StatusBg : string, Status : string}) => {
    return <button
        type="button"
        style={{ background: props.StatusBg }}
        className="px-2 py-1 text-white capitalize rounded-2xl text-md"
    >
        {props.Status}
    </button>
}

export const gridEmployeeProfile = (props : {EmployeeImage : string, Name: string}) => {
    return <div className="flex items-center gap-2">
        <img
            className="w-10 h-10 rounded-full"
            src={props.EmployeeImage}
            alt="employee"
        />
        <p>{props.Name}</p>
    </div>
};

export const gridEmployeeCountry = (props : {Country : string}) => {
    return <div className="flex items-center justify-center gap-2">
        <GrLocation />
        <span>{props.Country}</span>
    </div>
};

export const EditorData = () => {
    return <div>
        <h3>
            Try React
            React has been designed from the start for gradual adoption, and you can use as little or as much React as you need. Whether you want to get a taste of React, add some interactivity to a simple HTML page, or start a complex React-powered app, the links in this section will help you get started.

            Online Playgrounds
            If you’re interested in playing around with React, you can use an online code playground. Try a Hello World template on CodePen, CodeSandbox, or Stackblitz.

            If you prefer to use your own text editor, you can also download this HTML file, edit it, and open it from the local filesystem in your browser. It does a slow runtime code transformation, so we’d only recommend using this for simple demos.

            Add React to a Website
            You can add React to an HTML page in one minute. You can then either gradually expand its presence, or keep it contained to a few dynamic widgets.

            Create a New React App
            When starting a React project, a simple HTML page with script tags might still be the best option. It only takes a minute to set up!

            As your application grows, you might want to consider a more integrated setup. There are several JavaScript toolchains we recommend for larger applications. Each of them can work with little to no configuration and lets you take full advantage of the rich React ecosystem. Learn how.

            Learn React
            People come to React from different backgrounds and with different learning styles. Whether you prefer a more theoretical or a practical approach, we hope you’ll find this section helpful.

            If you prefer to learn by doing, start with our practical tutorial.
            If you prefer to learn concepts step by step, start with our guide to main concepts.
            Like any unfamiliar technology, React does have a learning curve. With practice and some patience, you will get the hang of it.

            First Examples
            The React homepage contains a few small React examples with a live editor. Even if you don’t know anything about React yet, try changing their code and see how it affects the result.

            React for Beginners
            If you feel that the React documentation goes at a faster pace than you’re comfortable with, check out this overview of React by Tania Rascia. It introduces the most important React concepts in a detailed, beginner-friendly way. Once you’re done, give the documentation another try!

            React for Designers
            If you’re coming from a design background, these resources are a great place to get started.

            JavaScript Resources
            The React documentation assumes some familiarity with programming in the JavaScript language. You don’t have to be an expert, but it’s harder to learn both React and JavaScript at the same time.

            We recommend going through this JavaScript overview to check your knowledge level. It will take you between 30 minutes and an hour but you will feel more confident learning React.
        </h3>
    </div>
}

const CustomerGridImage = (props : {CustomerImage : string, CustomerName : string, CustomerEmail : string}) => {
    return <div className="flex gap-4 image">
        <img
            className="w-10 h-10 rounded-full"
            src={props.CustomerImage}
            alt="employee"
        />
        <div>
            <p>{props.CustomerName}</p>
            <p>{props.CustomerEmail}</p>
        </div>
    </div>
}

const customerGridStatus = (props : {StatusBg : string, Status : string}) => (
    <div className="flex items-center justify-center gap-2 text-gray-700 capitalize">
        <p style={{ background: props.StatusBg }} className="w-3 h-3 rounded-full" />
        <p>{props.Status}</p>
    </div>
);