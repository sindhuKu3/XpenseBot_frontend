import { useState} from "react";
import AddIncome from "../AddIncome/AddIncome";
import AddExpense from "../AddExpense/AddExpense";
import "./profilestyles.css";

import ChartTable from "../ChartTable/ChartTable";
import { useGlobalContext } from "../../Context/globalContext";
import { Rupees } from "../../Utils/Icons";





const Profile = () => {
  const {
    totalBalance
  } = useGlobalContext();
  const [selectedType, setSelectedType] = useState(null);
  const handleTypeClick = (type) => {
    setSelectedType(type);
  };
  return (
    <div className="Profile">
      <h1>User Profile</h1>
      <div class="row">
        <div class="col-sm-3">
          <div class="card">
            <div class="card-body">
              <img
                class="card-img-top"
                src="/images/default.png"
                alt="Card image cap"
              />
              <h6 class="card-subtitle mb-2 UserName">{}</h6>
              <p class="card-text">
                UserName:
                <span>Amelia</span>
              </p>
              <p class="card-text">
                Total Balance:
                <span>
                  {Rupees} {totalBalance()}
                </span>
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm-8">
          <ChartTable />
        </div>
      </div>
      <hr />
      <div className="Second-Container">
        <h1>Income Section</h1>

        <div class="row">
          <AddIncome />
        </div>
        <hr />
        <h1>Expenses Section</h1>
        <div class="row">
          <AddExpense />
        </div>
      </div>
    </div>
  );
};

export default Profile;
