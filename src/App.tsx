import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";


import './App.css'
import Pie from "./components/Pie";
import Pyramid from "./components/Pyramid";
import { SideBarProvider } from "./providers/sideBarProvider";
import PopUpProvider from "./providers/PopUpProvider";
import NotFound from "./components/NotFound";
import ThemeSettings from "./components/ThemeSettings";
import ThemeProvider from "./providers/ThemeProvider";
import CommonLayout from "./components/CommonLayout";
import Ecommerce from "./components/dashboard/Ecommerce";
import Area from "./components/Charts/Area";
import Bar from "./components/Charts/Bar";
import ColorMapping from "./components/Charts/ColorMapping";
import Financial from "./components/Charts/Financial";
import Line from "./components/Charts/Line";

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<CommonLayout />}>
        <Route index element={<Ecommerce />} />
        <Route path="ecommerce" element={<Ecommerce />} />
        <Route path="area" element={<Area />} />
        <Route path="bar" element={<Bar />} />
        <Route path="color-mapping" element={<ColorMapping />} />
        <Route path="financial" element={<Financial />} />
        <Route path="line" element={<Line />} />
        <Route path="pie" element={<Pie />} />
        <Route path="pyramid" element={<Pyramid />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  )

  return <div>
    <SideBarProvider>
      <PopUpProvider>
        <ThemeProvider>
        <RouterProvider router={router} />
        <ThemeSettings />
        </ThemeProvider>
      </PopUpProvider>
    </SideBarProvider>
  </div>
}

export default App
