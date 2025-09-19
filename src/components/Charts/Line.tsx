import ChartsHeader from "./ChartsHeaders";
import { useSideBar } from "../../providers/sideBarProvider";
import LineChart from "./LineChart";

const Line = () => {
  const { isOpen } = useSideBar();

  return (
    <div
      className={` ${isOpen
          ? "medium-screen-open-navbar max-sm:small-screen-open-navbar"
          : " medium-screen-close-navbar max-sm:small-screen-open-navbar"
        } absolute max-sm:top-1/2 max-sm:-translate-y-1/2 grid place-items-center md:mt-14`}
    >
      <div className="bg-white rounded-md dark:bg-secondary-dark-bg w-[80%] p-3">
        <ChartsHeader category="Line" title="Inflation Rate" />
        <div className="w-full">
          <LineChart />
        </div>
      </div>
    </div>
  );
};

export default Line;
