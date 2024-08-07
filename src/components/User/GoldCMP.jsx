import React, { useState, useEffect } from 'react';

const Gold = () => {
  const [prices, setPrices] = useState({
    gold: 'Loading...',
    silver: 'Loading...',
    platinum: 'Loading...',
    palladium: 'Loading...',
  });
  const apiUrl = 'https://www.goldapi.io/api';
  const apiToken = 'goldapi-1l6u4slzk480vu-io';
  const refreshInterval = 28800000; // 8 hours in milliseconds

  const fetchPrices = async () => {
    try {
      const requests = [
        fetch(`${apiUrl}/XAU/USD`, { method: 'GET', headers: { 'x-access-token': apiToken, 'Content-Type': 'application/json' } }),
        fetch(`${apiUrl}/XAG/USD`, { method: 'GET', headers: { 'x-access-token': apiToken, 'Content-Type': 'application/json' } }),
        fetch(`${apiUrl}/XPT/USD`, { method: 'GET', headers: { 'x-access-token': apiToken, 'Content-Type': 'application/json' } }),
        fetch(`${apiUrl}/XPD/USD`, { method: 'GET', headers: { 'x-access-token': apiToken, 'Content-Type': 'application/json' } })
      ];

      const responses = await Promise.all(requests);
      const data = await Promise.all(responses.map(response => response.json()));

      setPrices({
        gold: `$${data[0].price}`,
        silver: `$${data[1].price}`,
        platinum: `$${data[2].price}`,
        palladium: `$${data[3].price}`
      });
      // setPrices({
      //   gold: `$2401.34`,
      //   silver: `$27.03`,
      //   platinum: `$915.16`,
      //   palladium: `$885.47`
      // });
    } catch (error) {
      console.error('Error fetching prices:', error);
      setPrices({
        gold: 'Error',
        silver: 'Error',
        platinum: 'Error',
        palladium: 'Error'
      });
    }
  };

  useEffect(() => {
    fetchPrices();
    const interval = setInterval(fetchPrices, refreshInterval);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-full bg-gray-950 p-6">
      <div className=" container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-slate-300">Live Metal Prices</h1>
        <button
          id="refresh-button"
          onClick={fetchPrices}
          className="block w-48 mx-auto bg-slate-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-blue-800 transition duration-300"
        >
          Refresh Prices
        </button>
        <div id="prices" className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          <div className="price-item bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            {/* <img src="/images/gold.jpeg" alt="Gold" className="w-24 h-24 mx-auto mb-4 object-contain" /> */}
            <h2 className="text-2xl font-semibold text-teal-200">Gold</h2>
            <p id="gold-price" className="text-xl mt-2">{prices.gold}</p>
          </div>
          <div className="price-item bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            {/* <img src="/images/silver.jpeg" alt="Silver" className="w-24 h-24 mx-auto mb-4 object-contain" /> */}
            <h2 className="text-2xl font-semibold text-teal-200">Silver</h2>
            <p id="silver-price" className="text-xl mt-2">{prices.silver}</p>
          </div>
          <div className="price-item bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            {/* <img src="/images/platinum.jpg" alt="Platinum" className="w-24 h-24 mx-auto mb-4 object-contain" /> */}
            <h2 className="text-2xl font-semibold text-teal-200">Platinum</h2>
            <p id="platinum-price" className="text-xl mt-2">{prices.platinum}</p>
          </div>
          <div className="price-item bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            {/* <img src="/images/palladium.png" alt="Palladium" className="w-24 h-24 mx-auto mb-4 object-contain" /> */}
            <h2 className="text-2xl font-semibold text-teal-200">Palladium</h2>
            <p id="palladium-price" className="text-xl mt-2">{prices.palladium}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gold;
