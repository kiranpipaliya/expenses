import React from "react";
import "./Chart.css"
import ChartBar from "./ChartBar"

const Chart = props => {
    const dataValueArry = props.dataPoints.map(el => el.value);
    const totalMaxValue = Math.max(...dataValueArry)

    return <div className="chart">

        {props.dataPoints.map(dataPoint => <ChartBar key={dataPoint.label} value={dataPoint.value} maxValue={totalMaxValue} label={dataPoint.label} />)}
    </div>
}

export default Chart;