import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";


import './App.css'
import Home from "./components/Home";
import CommonLayout from "./components/CommonLayout";
import Ecommerce from "./components/Ecommerce";
import Area from "./components/Area";
import Bar from "./components/Bar";
import ColorPicker from "./components/ColorPicker";
import Employees from "./components/Employees";
import Financial from "./components/Financial";
import Line from "./components/Line";
import Orders from "./components/Orders";
import Pie from "./components/Pie";
import Pyramid from "./components/Pyramid";
import Stacked from "./components/Stacked";
import Editor from "./components/Editor";
import Kanban from "./components/Kanban";
import Customers from "./components/Customers";
import Calendar from "./components/Calendar";
import ColorMapping from "./components/ColorMapping";
import { SideBarProvider } from "./providers/sideBarProvider";
import PopUp from "./components/PopUp";
import PopUpProvider from "./providers/PopUpProvider";

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<CommonLayout />}>
        <Route index element={<Home />} />
        <Route path="area" element={<Area />} />
        <Route path="bar" element={<Bar />} />
        <Route path="calendar" element={<Calendar />} />
        <Route path="color-picker" element={<ColorPicker />} />
        <Route path="customers" element={<Customers />} />
        <Route path="ecommerce" element={<Ecommerce />} />
        <Route path="color-mapping" element={<ColorMapping />} />
        <Route path="editor" element={<Editor />} />
        <Route path="employees" element={<Employees />} />
        <Route path="financial" element={<Financial />} />
        <Route path="kanban" element={<Kanban />} />
        <Route path="line" element={<Line />} />
        <Route path="orders" element={<Orders />} />
        <Route path="pie" element={<Pie />} />
        <Route path="pyramid" element={<Pyramid />} />
        <Route path="stacked" element={<Stacked />} />
      </Route>
    )
  )

  return <div>
    <SideBarProvider>
      <PopUpProvider>
        <RouterProvider router={router} />
      </PopUpProvider>
    </SideBarProvider>
  </div>
}

export default App
