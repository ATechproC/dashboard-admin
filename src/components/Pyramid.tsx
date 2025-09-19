import React from "react";
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  Inject,
  AccumulationLegend,
  AccumulationDataLabel,
  AccumulationTooltip,
  PyramidSeries,
  AccumulationSelection,
} from "@syncfusion/ej2-react-charts";

import { PyramidData } from "../constants/index";
// import { useStateContext } from '../../contexts/ContextProvider';
import { useSideBar } from "../providers/sideBarProvider";
import ChartsHeader from "./Charts/ChartsHeaders";
import { useTheme } from "../providers/ThemeProvider";

const Pyramid = () => {

  const {isDark} = useTheme();

  const { isOpen } = useSideBar();

  return (
    <div
      className={` ${isOpen
          ? "medium-screen-open-navbar max-sm:small-screen-open-navbar"
          : " medium-screen-close-navbar max-sm:small-screen-open-navbar"
        } max-sm:top-1/2 max-sm:-translate-y-1/2 absolute grid place-items-center md:mt-14`}
    >
      <div className="p-3 bg-white rounded-md dark:bg-secondary-dark-bg w-[80%]">
        <ChartsHeader category="Pyramid" title="Food Comparison Chart" />
        <div className="w-full">
          <AccumulationChartComponent
          height="350px"
            id="pyramid-chart"
            legendSettings={{ background: "white" }}
            tooltip={{ enable: true }}
            background={isDark ? "#33373E" : "#fff"}
          // background={currentMode === 'Dark' ? '#33373E' : '#fff'}
          >
            <Inject
              services={[
                AccumulationDataLabel,
                AccumulationTooltip,
                PyramidSeries,
                AccumulationLegend,
                AccumulationSelection,
              ]}
            />
            <AccumulationSeriesCollectionDirective>
              <AccumulationSeriesDirective
                name="Food"
                dataSource={PyramidData}
                xName="x"
                yName="y"
                type="Pyramid"
                width="45%"
                height="80%"
                neckWidth="15%"
                gapRatio={0.03}
                explode
                emptyPointSettings={{ mode: "Drop", fill: "red" }}
                dataLabel={{
                  visible: true,
                  position: "Inside",
                  name: "text",
                }}
              />
            </AccumulationSeriesCollectionDirective>
          </AccumulationChartComponent>
        </div>
      </div>
    </div>
  );
};

export default Pyramid;
