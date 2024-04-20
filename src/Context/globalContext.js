import React,{useContext, useState}from "react"  ;
import axios from 'axios' ; 
const BASE_URL = "http://localhost:5000/api/" ; 
const GlobalContext = React.createContext() ; 
export const GlobalProvider =({children})=>{
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [error, setError] = useState(null);
   
 
 
   const addIncome = async (income) => {
     const response = await axios
       .post(`${BASE_URL}transaction/add-income`, income)

       .catch((err) => {
         setError(err.response.data.message);
       });
     getIncomes();
   };
   //function for getting expenses
   const getIncomes = async () => {
     const response = await axios.get(`${BASE_URL}transaction/get-incomes`);
     setIncomes(response.data);
     console.log(response.data);
   };

   //function for deleting income
   const deleteIncome = async (id) => {
     const res = await axios.delete(
       `${BASE_URL}transaction/delete-income/${id}`
     );
     getIncomes();
   };
   //function for getting totalincome
   const totalIncome = () => {
     let totalIncome = 0;
     incomes.forEach((income) => {
       totalIncome = totalIncome + income.amount;
     });
     return totalIncome;
   };

   const addExpense = async (expense) => {
     const response = await axios
       .post(`${BASE_URL}transaction/add-expense`, expense)

       .catch((err) => {
         setError(err.response.data.message);
       });
     getExpenses();
   };
   //function for getting expenses
   const getExpenses = async () => {
     const response = await axios.get(`${BASE_URL}transaction/get-expenses`);
     setExpenses(response.data);
     console.log(response.data);
   };

   //function for deleting expenses
   const deleteExpense = async (id) => {
     const res = await axios.delete(
       `${BASE_URL}transaction/delete-expense/${id}`
     );
     getExpenses();
   };
   //function for getting totalexpense
   const totalExpense = () => {
     let totalExpense = 0;
     expenses.forEach((expense) => {
       totalExpense = totalExpense + expense.amount;
     });
     return totalExpense;
   };
   const totalBalance = () => {
     let totalBalance = 0;
     return totalIncome() - totalExpense();
   };

   
  return (
    <GlobalContext.Provider
      value={{
        addIncome,
        getIncomes,
        incomes,
        deleteIncome,
        totalIncome,
        addExpense,
        getExpenses,
        expenses,
        totalExpense,
        deleteExpense,
        totalBalance,
      
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
export const useGlobalContext=()=>{
return useContext(GlobalContext) ;
}