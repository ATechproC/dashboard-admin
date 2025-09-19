
import PieChart from '../components/Charts/Pie';
import { pieChartData } from '../constants';
import { useSideBar } from '../providers/sideBarProvider';
import ChartsHeader from './Charts/ChartsHeaders';

const Pie = () => {

    const { isOpen } = useSideBar();

    return <div className={` ${isOpen ? "medium-screen-open-navbar max-sm:small-screen-open-navbar" : " medium-screen-close-navbar max-sm:small-screen-open-navbar"} max-sm:top-1/2 max-sm:-translate-y-1/2 absolute grid place-items-center md:mt-14`}>
        <div className=" bg-white dark:bg-secondary-dark-bg rounded-md w-[80%] text-center">
            <ChartsHeader category="Pie" title="Project Cost Breakdown" />
            <div className="w-full">
                <PieChart id="chart-pie" data={pieChartData} legendVisiblity height="370px" />
            </div>
        </div>
    </div>
}

export default Pie;