import React, { useEffect, useState } from 'react';

const Currency = () => {
    const [currencies, setCurrencies] = useState([]);
    const [fromCurrency, setFromCurrency] = useState('');
    const [toCurrency, setToCurrency] = useState('');
    const [amount, setAmount] = useState('');
    const [result, setResult] = useState('');

    const apiKey = 'fca_live_1SvLJtQ0Kxuy5xih7NklRmoWFXQbjRbfx9hwSviB';
    const apiUrl = `https://api.freecurrencyapi.com/v1/latest?apikey=${apiKey}`;

    useEffect(() => {
        const fetchCurrencies = async () => {
            try {
                const response = await fetch(apiUrl);
                const data = await response.json();
                if (data && data.data) {
                    setCurrencies(Object.keys(data.data));
                } else {
                    throw new Error('Invalid API response');
                }
            } catch (error) {
                console.error('Error fetching currencies:', error);
            }
        };

        fetchCurrencies();
    }, [apiUrl]);

    const convertCurrency = async () => {
        if (!fromCurrency || !toCurrency || !amount) {
            setResult('Please fill in all fields.');
            return;
        }

        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            if (data && data.data) {
                const rate = data.data[toCurrency] / data.data[fromCurrency];
                const convertedAmount = (amount * rate).toFixed(2);
                setResult(`Converted Amount: ${convertedAmount} ${toCurrency}`);
            } else {
                throw new Error('Invalid API response');
            }
        } catch (error) {
            console.error('Error converting currency:', error);
            setResult('Error converting currency.');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-Black">
            <div className="w-full shadow-blue-400 max-w-md p-8 bg-Navy bg-opacity-50 backdrop-blur-md rounded-lg shadow-md">
                <h1 className="text-3xl font-bold mb-4 text-White">Currency Exchanger</h1>
                <div className="mb-4">
                    <label htmlFor="amount" className="block mb-2 font-bold text-White">Amount:</label>
                    <input 
                        type="number" 
                        id="amount" 
                        placeholder="Enter amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="w-full p-3 bg-Black text-White border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="fromCurrency" className="block mb-2 font-bold text-White">From:</label>
                    <select 
                        id="fromCurrency" 
                        value={fromCurrency} 
                        onChange={(e) => setFromCurrency(e.target.value)}
                        className="w-full p-3 bg-Black text-White border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                        <option value="">Select currency</option>
                        {currencies.map((currency) => (
                            <option key={currency} value={currency}>{currency}</option>
                        ))}
                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="toCurrency" className="block mb-2 font-bold text-White">To:</label>
                    <select 
                        id="toCurrency" 
                        value={toCurrency} 
                        onChange={(e) => setToCurrency(e.target.value)}
                        className="w-full p-3 bg-Black text-White border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                        <option value="">Select currency</option>
                        {currencies.map((currency) => (
                            <option key={currency} value={currency}>{currency}</option>
                        ))}
                    </select>
                </div>
                <button 
                    onClick={convertCurrency} 
                    className="w-full p-3 text-White bg-Black border border-white rounded-lg shadow-md hover:bg-Navy transform hover:scale-105 transition-transform duration-300"
                >
                    Convert
                </button>
                <div className="mt-4 text-xl text-White">{result}</div>
            </div>
        </div>
    );
};

export default Currency;
