import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  DateTime,
  SplineAreaSeries,
  Legend,
} from "@syncfusion/ej2-react-charts";

import {
  areaCustomSeries,
  areaPrimaryXAxis,
  areaPrimaryYAxis,
} from "../../constants/index";
import ChartsHeader from "./ChartsHeaders";
import { useSideBar } from "../../providers/sideBarProvider";
import { useTheme } from "../../providers/ThemeProvider";

const Area = () => {
  const { isDark } = useTheme();

  const { isOpen } = useSideBar();
  return (
    <div
      className={` ${isOpen
          ? "medium-screen-open-navbar max-sm:small-screen-open-navbar"
          : " medium-screen-close-navbar max-sm:small-screen-open-navbar"
        } max-sm:top-1/2 max-sm:-translate-y-1/2 absolute grid place-items-center md:mt-14`}
    >
      <div className="p-3 bg-white rounded-md dark:bg-dark-2 w-[80%]">
        <ChartsHeader category="Area" title="Inflation Rate in percentage" />
        <div className="w-full m-auto">
          <ChartComponent
            id="charts"
            height="350px"
            primaryXAxis={areaPrimaryXAxis}
            primaryYAxis={areaPrimaryYAxis}
            chartArea={{ border: { width: 0 } }}
            background={isDark ? "#33373E" : "#fff"}
            legendSettings={{ background: "white" }}
          >
            <Inject services={[SplineAreaSeries, DateTime, Legend]} />
            <SeriesCollectionDirective>
              {/* eslint-disable-next-line react/jsx-props-no-spreading */}
              {areaCustomSeries.map((item, index) => (
                <SeriesDirective key={index} {...item} />
              ))}
            </SeriesCollectionDirective>
          </ChartComponent>
        </div>
      </div>
    </div>
  );
};

export default Area;
