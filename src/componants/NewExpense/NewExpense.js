
import React, { useState } from "react";
import ExpenseFrom from "./ExpenseFrom";
import "./NewExpense.css";

const NewExpense = (props) => {
    const [startEdditing, setEdditing] = useState(false)
    const saveExpenseDataHandler = (expenseDataForm) => {
        const expenseData = {
            ...expenseDataForm,
            id: Math.random().toString(),
        }
        props.onAddExpense(expenseData);
        setEdditing(false)
    }

    const eddtingHandler = () => {
        setEdditing(true)
    }
    const stopEddtingHandler = () => {
        setEdditing(false)
    }

    return (
        <div className="new-expense">
            {!startEdditing && <button onClick={eddtingHandler} >Add Expense</button>}
            {startEdditing && <ExpenseFrom onCancel={stopEddtingHandler} onSaveData={saveExpenseDataHandler} />}
        </div>
    )

}
export default NewExpense;