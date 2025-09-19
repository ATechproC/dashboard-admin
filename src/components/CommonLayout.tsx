import MobileNavBar from './NavBar/MobileNavBar'
import MobileSideBar from './SideBar/MobileSideBar'
import NavBar from './NavBar/NavBar'
import Settings from './Settings'
import { Outlet } from 'react-router-dom'
import SideBar from './SideBar/SideBar'

const CommonLayout = () => {
    return (
        <div>
            <SideBar />
            <NavBar />
            <MobileSideBar />
            <MobileNavBar />
            <Settings />
            <div className='w-screen'>
                <Outlet />
            </div>
        </div>
    )
}

export default CommonLayout