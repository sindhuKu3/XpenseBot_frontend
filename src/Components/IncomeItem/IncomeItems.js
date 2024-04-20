import moment from "moment";
import { Rupees, calender, comment, trash } from "../../Utils/Icons";
import "./incomeitemstyles.css";
const IncomeItem = ({
  id,
  title,
  amount,
  description,
  date,
  deleteItem,
  type,
  totalIncome,
}) => {
  return (
    <div className="IncomeItem">
      <ul class="nav">
        <li class="nav-item">
          <h5>{title}</h5>
        </li>
        <li class="nav-item">
          <p class="nav-link ">
            {Rupees}
            {amount}
          </p>
        </li>
        <li class="nav-item">
          <p class="nav-link">
            {calender}
            {moment(date).format("DD/MM/YYYY")}
          </p>
        </li>
        <li class="nav-item">
          <p class="nav-link">
            {comment}
            {description}
          </p>
        </li>
        <li class="nav-item">
          <div className="DelteBtn expense income nav-link">
            <button className="trash"onClick={() => deleteItem(id)}>{trash}</button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default IncomeItem;
