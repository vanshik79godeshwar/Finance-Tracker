import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import Button from './Button';
import { plus } from '../utils/Icons';

const BASE_URL = "http://localhost:5000/api/transactions/";

function Form({ type, fetchData, user }) {
  const [inputState, setInputState] = useState({
    title: '',
    amount: '',
    date: '',
    category: '',
    description: '',
    user: user._id,
  });

  const { title, amount, date, category, description } = inputState;

  const handleInput = (name) => (e) => {
    setInputState({ ...inputState, [name]: e.target.value, user: user._id });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting: ", inputState); // Debug log to check state before submission
    try {
      await axios.post(`${BASE_URL}add-${type}`, inputState);
      fetchData();
      setInputState({
        title: '',
        amount: '',
        date: '',
        category: '',
        description: '',
        user: user._id,
      });
    } catch (error) {
      console.error("Error: ", error.response.data.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex flex-col">
        <input
          type="text"
          value={title}
          name="title"
          placeholder="Title"
          onChange={handleInput('title')}
          className="p-3 rounded-md outline-none "
        />
      </div>
      <div className="flex flex-col">
        <input
          type="text"
          value={amount}
          name="amount"
          placeholder="Amount"
          onChange={handleInput('amount')}
          className="p-3 rounded-md outline-none"
        />
      </div>
      <div className="flex flex-col">
        <DatePicker
          id="date"
          placeholderText="Enter A Date"
          selected={date}
          dateFormat="dd/MM/yyyy"
          onChange={(date) => {
            setInputState({ ...inputState, date, user: user._id });
          }}
          className="p-3 rounded-md outline-none"
        />
      </div>
      <div className="flex flex-col">
        <select
          required
          value={category}
          name="category"
          id="category"
          onChange={handleInput('category')}
          className="p-3 rounded-md outline-none"
        >
          <option value="" disabled>
            Select Option
          </option>
          <option value="salary">Salary</option>
          <option value="freelancing">Freelancing</option>
          <option value="investments">Investments</option>
          <option value="stocks">Stocks</option>
          <option value="bitcoin">Bitcoin</option>
          <option value="bank">Bank Transfer</option>
          <option value="youtube">YouTube</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="flex flex-col">
        <textarea
          name="description"
          value={description}
          placeholder="Add A Reference"
          id="description"
          cols="30"
          rows="4"
          onChange={handleInput('description')}
          className="p-3 rounded-md outline-none"
        ></textarea>
      </div>
      <div className="flex justify-end">
        <Button
          bg={'bg-green-500 hover:bg-green-600 text-white rounded-3xl cursor-pointer transition-all ease-in-out duration-300 ease-in-out shadow p-4 text-center text-sm font-semibold '}
          name={`Add ${type}`}
          icon={plus}
          className="px-4 py-2"
        />
      </div>
    </form>
  );
}

export default Form;
