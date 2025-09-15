import MobileNavBar from './MobileNavBar'
import MobileSideBar from './MobileSideBar'
import NavBar from './NavBar'
import SideBar from './SideBar'
import { Outlet } from 'react-router-dom'

const CommonLayout = () => {
    return (
        <div>
            <SideBar />
            <NavBar />
            <MobileSideBar />
            <MobileNavBar />
            <div className='absolute left-1/2 top-1/2'>
                <Outlet />
            </div>
        </div>
    )
}

export default CommonLayout