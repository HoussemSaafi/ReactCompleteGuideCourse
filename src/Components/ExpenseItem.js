import React from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

export default function ExpenseItem({ expense }) {
  return (
    <div className="expense-item">
      <div className="expense-item__description">
        <ExpenseDate date={expense.date} />
        <h2> {expense.title} </h2>
        <div className="item__price"> {expense.amount} </div>
      </div>
    </div>
  );
}
