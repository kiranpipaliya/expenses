import React, { useState } from "react";
import "./ExpenseForm.css"

const ExpenseFrom = (props) => {

    const [enteredTitle, setEntredTitle] = useState("")
    const [enteredAmoun, setEntredAmoun] = useState("")
    const [enteredDate, setEntredDate] = useState("")

    const titleChangeHandler = (event) => {
        setEntredTitle(event.target.value);
    }
    const amountChangeHandler = (event) => {
        setEntredAmoun(event.target.value);
    }
    const dateChangeHandler = (event) => {
        setEntredDate(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmoun,
            date: new Date(enteredDate),
        }
        props.onSaveData(expenseData)
        setEntredTitle("");
        setEntredDate("");
        setEntredAmoun("")
    }


    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={enteredAmoun} onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions ">
                <button onClick={props.onCancel} type="button">Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>)
}
export default ExpenseFrom;