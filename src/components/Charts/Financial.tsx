import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  HiloSeries,
  Tooltip,
  DateTime,
  Zoom,
  Logarithmic,
  Crosshair,
} from "@syncfusion/ej2-react-charts";

import {
  financialChartData,
  FinancialPrimaryXAxis,
  FinancialPrimaryYAxis,
} from "../../constants/index";
import { useSideBar } from "../../providers/sideBarProvider";
import { useTheme } from "../../providers/ThemeProvider";
import ChartsHeader from "./ChartsHeaders";

const date1 = new Date("2017, 1, 1");

// eslint-disable-next-line consistent-return
function filterValue(value: { x: Date; high: number; low: number }) {
  if (value.x >= date1) {
    // eslint-disable-next-line no-sequences
    return value.x, value.high, value.low;
  }
}
const returnValue = financialChartData.filter(filterValue);

const Financial = () => {
  const { isOpen } = useSideBar();

  const { isDark } = useTheme();

  return (
    <div
      className={` ${isOpen
          ? "medium-screen-open-navbar max-sm:small-screen-open-navbar"
          : " medium-screen-close-navbar max-sm:small-screen-open-navbar"
        } max-sm:top-1/2 max-sm:-translate-y-1/2 absolute grid place-items-center md:mt-14`}
    >
      <div className="p-3 bg-white rounded-md dark:bg-secondary-dark-bg w-[80%]">
        <ChartsHeader category="Financial" title="AAPLE Historical" />
        <div className="w-full">
          <ChartComponent
            id="charts"
            height="350px"
            primaryXAxis={FinancialPrimaryXAxis}
            primaryYAxis={FinancialPrimaryYAxis}
            chartArea={{ border: { width: 0 } }}
            tooltip={{ enable: true, shared: true }}
            crosshair={{
              enable: true,
              lineType: "Vertical",
              line: { width: 0 },
            }}
            background={isDark ? "#33373E" : "#fff"}
          >
            <Inject
              services={[
                HiloSeries,
                Tooltip,
                DateTime,
                Logarithmic,
                Crosshair,
                Zoom,
              ]}
            />
            <SeriesCollectionDirective>
              <SeriesDirective
                dataSource={returnValue}
                xName="x"
                yName="low"
                name="Apple Inc"
                type="Hilo"
                low="low"
                high="high"
              />
            </SeriesCollectionDirective>
          </ChartComponent>
        </div>
      </div>
    </div>
  );
};

export default Financial;
