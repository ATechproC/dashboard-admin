import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  Category,
  Tooltip,
  ColumnSeries,
  DataLabel,
} from "@syncfusion/ej2-react-charts";

import {
  barCustomSeries,
  barPrimaryXAxis,
  barPrimaryYAxis,
} from "../../constants/index";
import ChartsHeader from "./ChartsHeaders";
import { useSideBar } from "../../providers/sideBarProvider";
import { useTheme } from "../../providers/ThemeProvider";

const Bar = () => {
  const { isDark } = useTheme();

  const { isOpen } = useSideBar();

  return (
    <div
      className={` ${isOpen
          ? "medium-screen-open-navbar max-sm:small-screen-open-navbar"
          : " medium-screen-close-navbar max-sm:small-screen-open-navbar"
        } absolute max-sm:top-1/2 max-sm:-translate-y-1/2 grid place-items-center md:mt-14`}
    >
      <div className="p-3 bg-white rounded-md dark:bg-secondary-dark-bg w-[80%]">
        <ChartsHeader category="Bar" title="Olympic Medal Counts - RIO" />
        <div className="w-full ">
          <ChartComponent
            id="charts"
            height="350px"
            primaryXAxis={barPrimaryXAxis}
            primaryYAxis={barPrimaryYAxis}
            chartArea={{ border: { width: 0 } }}
            tooltip={{ enable: true }}
            background={isDark ? "#33373E" : "#fff"}
            legendSettings={{ background: "white" }}
          >
            <Inject
              services={[ColumnSeries, Legend, Tooltip, Category, DataLabel]}
            />
            <SeriesCollectionDirective>
              {/* eslint-disable-next-line react/jsx-props-no-spreading */}
              {barCustomSeries.map((item, index) => (
                <SeriesDirective key={index} {...item} />
              ))}
            </SeriesCollectionDirective>
          </ChartComponent>
        </div>
      </div>
    </div>
  );
};

export default Bar;
