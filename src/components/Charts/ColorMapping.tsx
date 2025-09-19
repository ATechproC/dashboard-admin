import {
    ChartComponent,
    SeriesCollectionDirective,
    SeriesDirective,
    Inject,
    ColumnSeries,
    Category,
    Tooltip,
    Legend,
    RangeColorSettingsDirective,
    RangeColorSettingDirective,
} from "@syncfusion/ej2-react-charts";

import {
    colorMappingData,
    ColorMappingPrimaryXAxis,
    ColorMappingPrimaryYAxis,
    rangeColorMapping,
} from "../../constants/index";
import ChartsHeader from "./ChartsHeaders";
import { useSideBar } from "../../providers/sideBarProvider";
import { useTheme } from "../../providers/ThemeProvider";

const ColorMapping = () => {
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
                <ChartsHeader
                    category="Color Mappping"
                    title="USA CLIMATE - WEATHER BY MONTH"
                />
                <div className="w-full">
                    <ChartComponent
                        id="charts"
                        height="350px"
                        primaryXAxis={ColorMappingPrimaryXAxis}
                        primaryYAxis={ColorMappingPrimaryYAxis}
                        chartArea={{ border: { width: 0 } }}
                        legendSettings={{ mode: "Range", background: "white" }}
                        tooltip={{ enable: true }}
                        background={isDark ? "#33373E" : "#fff"}
                    >
                        <Inject services={[ColumnSeries, Tooltip, Category, Legend]} />
                        <SeriesCollectionDirective>
                            <SeriesDirective
                                dataSource={colorMappingData[0]}
                                name="USA"
                                xName="x"
                                yName="y"
                                type="Column"
                                cornerRadius={{
                                    topLeft: 10,
                                    topRight: 10,
                                }}
                            />
                        </SeriesCollectionDirective>
                        <RangeColorSettingsDirective>
                            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                            {rangeColorMapping.map((item, index) => (
                                <RangeColorSettingDirective key={index} {...item} />
                            ))}
                        </RangeColorSettingsDirective>
                    </ChartComponent>
                </div>
            </div>
        </div>
    );
};

export default ColorMapping;
