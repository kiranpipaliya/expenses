import React from "react"
import Chart from "../Chart/Chart";


const ExpenseChart = (props) => {

    const dataPoints = [
        { label: "Jan", value: 0 },
        { label: "Feb", value: 0 },
        { label: "Mar", value: 0 },
        { label: "App", value: 0 },
        { label: "May", value: 0 },
        { label: "Jun", value: 0 },
        { label: "Jul", value: 0 },
        { label: "Aug", value: 0 },
        { label: "Sep", value: 0 },
        { label: "Oct", value: 0 },
        { label: "Nov", value: 0 },
        { label: "Dec", value: 0 }
    ];

    props.expense.forEach(Element => {
        const expenseMonth = Element.date.getMonth();
        dataPoints[expenseMonth].value += Element.amount;
    });

    return <div>
        <Chart dataPoints={dataPoints} />
    </div>
}

export default ExpenseChart;