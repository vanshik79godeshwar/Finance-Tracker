import React, { useContext, useState, useEffect } from "react";
import axios from 'axios';

const BASE_URL = "http://localhost:5000/api/transactions/";

const GlobalContext = React.createContext();

export const GlobalProvider = ({ children, user }) => {
    const [incomes, setIncomes] = useState([]);
    const [expenses, setExpenses] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (user) {
            getIncomes(user);
            getExpenses(user);
        }
    }, [user]);

    const addIncome = async (income, user) => {
        if (!user) {
            console.error('User is not authenticated');
            return;
        }

        try {
            await axios.post(`${BASE_URL}add-income`, { ...income, user: user._id }, {
                headers: {
                    'x-auth-token': localStorage.getItem('token')
                }
            });
            getIncomes(user);
        } catch (err) {
            setError(err.response?.data?.message || 'An error occurred');
        }
    };

    const getIncomes = async (user) => {
        if (!user) {
            console.error('User is not authenticated');
            return;
        }

        try {
            const response = await axios.get(`${BASE_URL}get-incomes`, {
                headers: {
                    'x-auth-token': localStorage.getItem('token')
                }
            });
            setIncomes(response.data);
        } catch (err) {
            console.error(err);
        }
    };

    const deleteIncome = async (id, user) => {
        if (!user) {
            console.error('User is not authenticated');
            return;
        }

        try {
            await axios.delete(`${BASE_URL}delete-income/${id}`, {
                headers: {
                    'x-auth-token': localStorage.getItem('token')
                }
            });
            getIncomes(user);
        } catch (err) {
            console.error(err);
        }
    };

    const addExpense = async (expense, user) => {
        if (!user) {
            console.error('User is not authenticated');
            return;
        }

        try {
            await axios.post(`${BASE_URL}add-expense`, { ...expense, user: user._id }, {
                headers: {
                    'x-auth-token': localStorage.getItem('token')
                }
            });
            getExpenses(user);
        } catch (err) {
            setError(err.response?.data?.message || 'An error occurred');
        }
    };

    const getExpenses = async (user) => {
        if (!user) {
            console.error('User is not authenticated');
            return;
        }

        try {
            const response = await axios.get(`${BASE_URL}get-expenses`, {
                headers: {
                    'x-auth-token': localStorage.getItem('token')
                }
            });
            setExpenses(response.data);
        } catch (err) {
            console.error(err);
        }
    };

    const deleteExpense = async (id, user) => {
        if (!user) {
            console.error('User is not authenticated');
            return;
        }

        try {
            await axios.delete(`${BASE_URL}delete-expense/${id}`, {
                headers: {
                    'x-auth-token': localStorage.getItem('token')
                }
            });
            getExpenses(user);
        } catch (err) {
            console.error(err);
        }
    };

    const totalIncome = () => {
        let totalIncome = 0;
        incomes.forEach((income) => {
            totalIncome += income.amount;
        });
        return totalIncome;
    };

    const totalExpenses = () => {
        let totalExpenses = 0;
        expenses.forEach((expense) => {
            totalExpenses += expense.amount;
        });
        return totalExpenses;
    };

    const totalBalance = () => {
        return totalIncome() - totalExpenses();
    };

    const transactionHistory = () => {
        const history = [...incomes, ...expenses];
        history.sort((a, b) => {
            return new Date(b.createdAt) - new Date(a.createdAt);
        });
        return history.slice(0, 5);
    };

    return (
        <GlobalContext.Provider value={{
            addIncome,
            getIncomes,
            incomes,
            deleteIncome,
            expenses,
            totalIncome,
            addExpense,
            getExpenses,
            deleteExpense,
            totalExpenses,
            totalBalance,
            transactionHistory,
            error,
            setError,
            user
        }}>
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(GlobalContext);
};
