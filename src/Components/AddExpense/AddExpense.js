import { useEffect } from "react";
import { useGlobalContext } from "../../Context/globalContext";
import "./expensestyles.css";
import IncomeItem from "../IncomeItem/IncomeItems";

import ExpenseForm from "../Form/ExpenseForm";
const AddExpense = () => {
  const { getExpenses, expenses, deleteExpense, totalExpense } =
    useGlobalContext();
  useEffect(() => {
    getExpenses();
  }, []);
  return (
    <div className="AddExpense">
      <div className="TotalExpenses">
        <h1>Total Expense: {totalExpense()}</h1>
      </div>
      <div className="Main_Container row">
        <div className="ExpenseForm col">
          <ExpenseForm />
        </div>
        <div className="ExpenseList col">
          <h1>All Expenses</h1>
          {expenses.map((expense) => {
            const { _id, title, amount, date, description, type } = expense;
            return (
              <IncomeItem
                key={_id}
                id={_id}
                title={title}
                description={description}
                amount={amount}
                date={date}
                deleteItem={deleteExpense}
                type={type}
                totalExpense={totalExpense}
              />
            );
          })}
        </div>
      </div>
      
    </div>
  );
};

export default AddExpense;
