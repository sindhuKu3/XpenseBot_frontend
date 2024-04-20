import { useState } from "react";
import { useGlobalContext } from "../../Context/globalContext";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./formstyles.css";
const IncomeForm = () => {
  const [inputState, setInputState] = useState({
    title: "",
    amount: "",
    date: new Date(), // Set initial date here
    category: "",
    description: "",
  });
  const { addIncome } = useGlobalContext();
  const { title, amount, date, description } = inputState;
  const handleInput = (name) => (e) => {
    setInputState({ ...inputState, [name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formattedDate = `${date.getDate()}/${
      date.getMonth() + 1
    }/${date.getFullYear()}`;
    addIncome({ ...inputState, date: formattedDate });
    setInputState({
      title: "",
      amount: "",
      date: new Date(), // Resetting date to initial value
      description: "",
    });
  };
  return (
    <div className="Form Income">
      <h1>Income Form</h1>
      <form
        action="/transaction/add-income"
        method="post"
        onSubmit={handleSubmit}
        className="IncomeForm"
      >
        <p style={{"textDecoration":"underline"}}>
        fill your income details
        </p>
        <div className="InputControl">
          <input
            type="text"
            value={title}
            name={"title"}
            placeholder="income title"
            onChange={handleInput("title")}
          />
        </div>

        <div className="InputControl">
          <input
            type="text"
            value={amount}
            name={"amount"}
            placeholder="income amount"
            onChange={handleInput("amount")}
          />
        </div>

        <div className="InputControl">
          <ReactDatePicker
            id="date"
            placeholderText="Enter A date"
            selected={date ? new Date(date) : null}
            dateFormat="dd/MM/yyyy"
            onChange={(date) => {
              setInputState({ ...inputState, date: date });
            }}
          />
        </div>

        <div className="InputControl">
          <textarea
            name="description"
            value={description}
            placeholder="Add a reference "
            id="description"
            cols="30"
            rows="4"
            onChange={handleInput("description")}
          ></textarea>
        </div>

        <div className="IncomeSubmit ">
          <button type="submit">+ADD</button>
        </div>
      </form>
    </div>
  );
};

export default IncomeForm;
