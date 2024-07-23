import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Form from '../IncomeForm';
import IncomeItem from './IncomeItem';
import Chart from './Chart5';

const BASE_URL = "http://localhost:5000/api/transactions/";

function Income({user}) {
  const [incomes, setIncomes] = useState([]);
  const [totalIncome, setTotalIncome] = useState(0);

  const fetchIncomes = async () => {
    try {
      const response = await axios.get(`${BASE_URL}get-incomes`);
      setIncomes(response.data);
      calculateTotalIncome(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const calculateTotalIncome = (incomes) => {
    const total = incomes.reduce((acc, income) => acc + income.amount, 0);
    setTotalIncome(total);
  };

  const deleteIncome = async (id) => {
    try {
      await axios.delete(`${BASE_URL}delete-income/${id}`);
      fetchIncomes();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchIncomes();
  }, []);

  return (
    <div className="flex flex-col h-auto p-4 text-white">
      <h2 className="text-2xl flex justify-center mt-7 mb-7">
        Total Income : <span className='font-bold text-green-500'>$</span><span className="font-bold text-green-500"> {`${totalIncome}`}</span>
      </h2>
      <div className='flex text-black flex-auto'>
        <Chart className="bg-Black"/>
      </div>
      <div className="flex flex-col md:flex-row h-screen gap-4 justify-center items-start mt-5">
        <div className="w-full md:w-1/2 border-White border-2 p-4 rounded-md">
          <h2 className="text-2xl flex justify-center mt-7 mb-7">Add Income</h2>
          <Form type="income" fetchData={fetchIncomes} user={user}/>
        </div>
        <div className="w-full md:w-1/2 h-3/4 overflow-y-auto flex flex-col gap-1 border p-7 rounded-lg backdrop-blur-sm">
          <h2 className="text-2xl flex justify-center mt-7 mb-7 ">Income List</h2>
          {incomes.map((income) => {
            const {
              _id,
              title,
              amount,
              date,
              category,
              description,
              type,
            } = income;
            return (
              <IncomeItem
                key={_id}
                id={_id}
                title={title}
                description={description}
                amount={amount}
                date={date}
                type={type}
                category={category}
                indicatorColor="text-green-500"
                deleteItem={deleteIncome}
              />
            );
          })}
        </div>
      </div>
      
    </div>
  );
}

export default Income;
