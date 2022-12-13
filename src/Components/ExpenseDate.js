import React from "react";

function ExpenseDate({ date }) {
  const day = date.toLocaleString("en-us", { weekday: "long" });
  const month = date.toLocaleString("en-us", { month: "long" });
  const year = date.toLocaleString("en-us", { year: "numeric" });

  return (
    <div>
      <div>Day : {day}</div>
      <div>Month : {month}</div>
      <div>Year : {year}</div>
    </div>
  );
}

export default ExpenseDate;
