import { SparklineAreaData } from "../../constants";
import { useSideBar } from "../../providers/sideBarProvider";
import { useTheme } from "../../providers/ThemeProvider";
import SparkLine from "../SparkLine";
import Stacked from "../Stacked";

const Ecommerce = () => {
  const { isOpen } = useSideBar();

  const { themeColors } = useTheme();

  return (
    <div
      className={` ${isOpen
          ? "medium-screen-open-navbar max-sm:small-screen-open-navbar"
          : " medium-screen-close-navbar max-sm:small-screen-open-navbar"
        } absolute max-sm:top-1/2 max-sm:-translate-y-1/2 grid place-items-center md:mt-14`}
    >
      <div className="bg-white w-[80%] px-5 py-3 mb-2 rounded-md dark:bg-dark-2 md:mt-12 max-sm:mt-56 max-sm:mb-8">
        <div className="w-full flex-between">
          <p className="font-semibold dark:text-white">Revenue Updates</p>
          <div className="gap-6 text-sm flex-items">
            <div className="relative">
              <span className="absolute inline-block w-2 h-2 -translate-y-1/2 rounded-full bg-favorite-2 dark:bg-white -left-3 top-1/2" />
              <p className="text-favorite-2 dark:text-white">Expense</p>
            </div>
            <div className="relative">
              <span className="absolute inline-block w-2 h-2 -translate-y-1/2 bg-green-400 rounded-full -left-3 top-1/2" />
              <p className="text-green-400">Budget</p>
            </div>
          </div>
        </div>
        <div className="flex-between max-sm:flex-col">
          <div className="flex flex-col items-center w-full">
            <div className="flex flex-col gap-3 pt-8">
              <div className="relative max-w-[100px]">
                <span className="text-[25px] font-semibold dark:text-white">
                  $93,438
                </span>
                <p className="-mt-[3px] text-gray-400 text-sm">Budget</p>
                <span className="absolute top-2 -right-8 grid w-7 h-7 text-[10px] cursor-pointer text-white bg-green-400 rounded-full place-items-center">
                  23%
                </span>
              </div>
              <div>
                <span className="text-[25px] font-semibold dark:text-white">
                  $48,487
                </span>
                <p className="-mt-[3px] text-gray-400 text-sm">Expense</p>
              </div>
            </div>
            <div className="mt-5">
              <SparkLine
                currentColor="#03c9d7"
                id="line-sparkLine"
                type="Line"
                height="80px"
                width="200px"
                data={SparklineAreaData}
                color="#03c9d7"
              />
            </div>
            <div className="mt-5">
              <button
                className="text-white rounded-[10px] py-1 px-3"
                style={{ backgroundColor: themeColors }}
              >
                {" "}
                Download Report{" "}
              </button>
            </div>
          </div>
          <span className="inline-block w-[90%] h-[1px] my-5 mt-6 bg-gray-400 md:hidden" />
          <div className="mt-6">
            {/* <Stacked currentMode={currentMode} width="320px" height="360px" /> */}
            <Stacked height="340px" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
