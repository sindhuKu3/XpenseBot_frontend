import { useEffect } from "react";
import { useGlobalContext } from "../../Context/globalContext";
import IncomeForm from "../Form/IncomeForm";
import "./incomestyles.css";
import IncomeItem from "../IncomeItem/IncomeItems";
import { Rupees } from "../../Utils/Icons";
const AddIncome = () => {
  const { getIncomes, incomes, deleteIncome, totalIncome } = useGlobalContext();
  useEffect(() => {
    getIncomes();
  }, []);
  return (
    <div className="AddIncome">
      <div className="TotalIncome-income">
        <h1>
          Total Income: {Rupees} {totalIncome()}
        </h1>
      </div>
      <div className="Main_Container row">
        <div className="IncomeForm col">
          <IncomeForm />
        </div>
        <div className="IncomeList col">
          <h1> All Incomes</h1>
          {incomes.map((income) => {
            const { _id, title, amount, date, description ,type} = income;
            return (
              <IncomeItem
                key={_id}
                id={_id}
                title={title}
                description={description}
                amount={amount}
                date={date}
                type={type}
                deleteItem={deleteIncome}
                totalIncome={totalIncome}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AddIncome;
