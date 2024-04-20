import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import moment from "moment";
import { Line } from "react-chartjs-2";
import { useGlobalContext } from "../../Context/globalContext";

ChartJs.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const ChartTable = () => {
  const { incomes, expenses } = useGlobalContext();
  const sortedIncomes = incomes.sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  const data = {
    labels: sortedIncomes.map((inc) => {
      const { date } = inc;
      return moment(date).format("DD/MM/YYYY");
    }),
    datasets: [
      {
        label: "Income",
        data: [
          ...incomes.map((income) => {
            const { amount } = income;
            return amount;
          }),
        ],
        backgroundColor: "rgb(28, 28, 161)",
        lineTension: 0.2,
      },
      {
        label: "Expenses",
        data: [
          ...expenses.map((expense) => {
            const { amount } = expense;
            return amount;
          }),
        ],
        backgroundColor: "grey",
        lineTension: 0.2,
      },
    ],
  };
  return (
    <div className="ChartTable">
      <Line data={data} />
    </div>
  );
};

export default ChartTable;
