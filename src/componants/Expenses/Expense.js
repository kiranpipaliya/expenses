

import React, { useState } from 'react';
import "./Expense.css";
import Card from "../UI/Card"
import ExpensesFilter from "./ExpenseFilter";
import ExpensesList from './ExpensesList';
import ExpenseChart from './ExpenseChart';

const Expense = (props) => {
    const [filteredYear, setFilterYear] = useState("2020")
    const filterValue = (FilterValue) => {
        setFilterYear(FilterValue);
        console.log("Expense", filteredYear);
    }
    const filterArry = props.items.filter(el => el.date.getFullYear().toString().includes(filteredYear))



    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onFilterAdd={filterValue} />
            <ExpenseChart expense={filterArry} />
            <ExpensesList items={filterArry} />
        </Card>
    )
}

export default Expense; 