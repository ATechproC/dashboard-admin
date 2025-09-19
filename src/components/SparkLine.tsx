import {
    SparklineComponent,
    Inject,
    SparklineTooltip,
} from "@syncfusion/ej2-react-charts";
import type { SparkLineProps } from "../types";


const SparkLine = ({
    id,
    height,
    width,
    color,
    data,
    type,
    currentColor,
}: SparkLineProps) => {
    return (
        <SparklineComponent
            id={id}
            height={height} // e.g., "200px"
            width={width} // e.g., "400px"
            lineWidth={1}
            valueType="Numeric"
            fill={color}
            border={{ color: currentColor, width: 2 }}
            tooltipSettings={{
                visible: true,
                format: "${x} : ${y}", // corrected
                trackLineSettings: { visible: true },
            }}
            markerSettings={{ visible: ["All"], size: 2.5, fill: currentColor }}
            dataSource={data}
            xName="x"
            yName="yval"
            type={type}
        >
            <Inject services={[SparklineTooltip]} />
        </SparklineComponent>
    );
};

export default SparkLine;
