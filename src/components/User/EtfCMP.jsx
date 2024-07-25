import React, { useEffect, useState } from 'react';
import ChartComponent from './Chart7';

const FinanceDashboard = ({ user }) => {
  const [sensexData, setSensexData] = useState([]);
  const [niftyData, setNiftyData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sensexFilter, setSensexFilter] = useState(30); // Default filter for Sensex: 30 days
  const [niftyFilter, setNiftyFilter] = useState(30); // Default filter for Nifty: 30 days
  const [liveSensex, setLiveSensex] = useState(null);
  const [liveNifty, setLiveNifty] = useState(null);

  const BASE_URL = "http://localhost:5000/api/etf/";

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Trigger the Python script to update data
        const updateResponse = await fetch(`${BASE_URL}update-data`);
        if (!updateResponse.ok) {
          throw new Error('Failed to update data');
        }

        // Fetch Sensex data
        const sensexResponse = await fetch(`${BASE_URL}sensex`);
        const sensexData = await sensexResponse.json();
        setSensexData(sensexData);

        // Fetch Nifty data
        const niftyResponse = await fetch(`${BASE_URL}nifty`);
        const niftyData = await niftyResponse.json();
        setNiftyData(niftyData);

        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchLiveData = async () => {
      try {
        const response = await fetch(`${BASE_URL}live-data`);
        const liveData = await response.json();
        setLiveSensex(liveData.SENSEX);
        setLiveNifty(liveData.NIFTY_50);
        console.log('Live data:', liveData);
      } catch (error) {
        console.error('Error fetching live data:', error);
      }
    };

    fetchLiveData();
    const intervalId = setInterval(fetchLiveData, 10000); // Refresh every 5 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  const filterData = (data, days) => {
    return data.slice(0, days);
  };

  const calculateChange = (data) => {
    if (data.length < 2) return { priceChange: 0, percentageChange: 0 };
    const first = data[data.length - 1].Price;
    const latest = data[0].Price;
    const priceChange = latest - first;
    const percentageChange = ((priceChange / first) * 100).toFixed(2);
    const Price = parseFloat(priceChange).toFixed(2);
    const Percentage = parseFloat(percentageChange).toFixed(2);

    return { Price, Percentage };
  };

  if (loading) {
    return (
      <div className='flex justify-center font-bold size-24 h-full w-full items-center'>
        <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" fill="none">
          <circle cx="50" cy="50" r="40" stroke="#3498db" stroke-width="8" stroke-dasharray="251.2" stroke-dashoffset="0" stroke-linecap="round">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 50 50"
              to="360 50 50"
              dur="1s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="stroke-dashoffset"
              values="0;251.2;0"
              dur="1s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>

        Loading...</div>
    );
  }

  const filteredSensexData = filterData(sensexData, sensexFilter);
  const sensexChange = calculateChange(filteredSensexData);

  const filteredNiftyData = filterData(niftyData, niftyFilter);
  const niftyChange = calculateChange(filteredNiftyData);

  return (
    <div className='flex flex-col items-center w-full p-4'>
      <div className='w-full flex flex-col md:flex-row mb-12'>
        <div className='flex flex-col w-full md:w-2/3'>
          <ChartComponent
            data={filteredSensexData}
            label="Sensex"
            title="Sensex Data"
            lineColor="#4bc0c0"
          />
          <div className='w-full flex justify-center mt-4'>
            <button
              onClick={() => setSensexFilter(30)}
              className={`p-4  border-r-2  transition-all duration-300 ease-in-out  ${sensexFilter === 30 ? ' text-gray-300' : 'text-gray-500'}`}
            >
              30 Days
            </button>
            <button
              onClick={() => setSensexFilter(15)}
              className={`p-4  border-r-2 border-l-2  transition-all duration-300 ease-in-out  ${sensexFilter === 15 ? ' text-gray-300' : 'text-gray-500'}`}
            >
              15 Days
            </button>
            <button
              onClick={() => setSensexFilter(7)}
              className={`p-4  border-l-2  transition-all duration-300 ease-in-out  ${sensexFilter === 7 ? ' text-gray-300' : 'text-gray-500'}`}
            >
              7 Days
            </button>
          </div>
        </div>
        <div className='w-full md:w-1/3 p-4 mt-4 md:mt-0'>
          <h2 className='text-xl font-bold mb-4'>Sensex Plan Section</h2>
          <div className='flex flex-col space-y-4'>
            <div className={`p-4 border rounded-lg shadow-sm ${sensexChange.Price > 0 ? 'text-green-600' : 'text-red-600'}`}>
              <h3 className='text-lg font-bold'>Price Change</h3>
              <p>{sensexChange.Price}</p>
            </div>
            <div className={`p-4 border rounded-lg shadow-sm ${sensexChange.Percentage > 0 ? 'text-green-600' : 'text-red-600'}`}>
              <h3 className='text-lg font-bold'>Percentage Change</h3>
              <p>{sensexChange.Percentage}%</p>
            </div>
            <div className='p-4 border rounded-lg shadow-sm flex items-center space-x-2'>
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="8" fill="red">
                  <animate attributeName="opacity" values="1;0.5;1" dur="1s" repeatCount="indefinite" />
                </circle>
              </svg>
              <div>
                <h3 className='text-lg font-serif'>Live Sensex Value (every 10 sec)</h3>
                <p>{liveSensex}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full flex flex-col md:flex-row mb-12'>
        <div className='flex flex-col w-full md:w-2/3'>
          <ChartComponent
            data={filteredNiftyData}
            label="Nifty"
            title="Nifty Data"
            lineColor="#ff6384"
          />
          <div className='w-full flex justify-center mt-4'>
            <button
              onClick={() => setNiftyFilter(30)}
              className={`p-4 border-gray-500 border-r-2  transition-all duration-300 ease-in-out  ${niftyFilter === 30 ? ' text-gray-200' : 'text-gray-500'}`}
            >
              30 Days
            </button>
            <button
              onClick={() => setNiftyFilter(15)}
              className={`p-4 border-gray-500 border-r-2 border-l-2  transition-all duration-300 ease-in-out  ${niftyFilter === 15 ? ' text-gray-200' : 'text-gray-500'}`}
            >
              15 Days
            </button>
            <button
              onClick={() => setNiftyFilter(7)}
              className={`p-4 border-gray-500 border-l-2 transition-all duration-300 ease-in-out  ${niftyFilter === 7 ? ' text-gray-200' : 'text-gray-500'}`}
            >
              7 Days
            </button>
          </div>
        </div>
        <div className='w-full md:w-1/3 p-4 mt-4 md:mt-0'>
          <h2 className='text-xl font-bold mb-4'>Nifty Plan Section</h2>
          <div className='flex flex-col space-y-4'>
            <div className={`p-4 border rounded-lg shadow-sm ${niftyChange.Price > 0 ? 'text-green-600' : 'text-red-600'}`}>
              <h3 className='text-lg font-bold'>Price Change</h3>
              <p>{niftyChange.Price}</p>
            </div>
            <div className={`p-4 border rounded-lg shadow-sm ${niftyChange.Percentage > 0 ? 'text-green-600' : 'text-red-600'}`}>
              <h3 className='text-lg font-bold'>Percentage Change</h3>
              <p>{niftyChange.Percentage}%</p>
            </div>
            <div className='p-4 border rounded-lg shadow-sm flex items-center space-x-2'>
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="8" fill="red">
                  <animate attributeName="opacity" values="1;0.5;1" dur="1s" repeatCount="indefinite" />
                </circle>
              </svg>
              <div>
                <h3 className='text-lg font-serif'>Live Nifty Value (every 10 sec)</h3>
                <p>{liveNifty}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinanceDashboard;
