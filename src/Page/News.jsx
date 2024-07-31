import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Article from '../components/Article';
import Navbar from '../components/Navbar';

export default function News() {

  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState('');
  const [error, setError] = useState(null);

  const fetchNews = async () => {
    try {
      const response = await axios.get(`https://finance-tracker-backend-dhar.onrender.com/api/news?query=${query}`);
      setArticles(response.data.articles);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    fetchNews();
  };

  return (
    <>
      <Navbar />
      <div className="News-section">
        <div className="input-field my-8 flex justify-center align-middle">
          <input type="text" value={query} onChange={handleInputChange} placeholder="eg.India, Trading" className='text-B px-10 mx-7 bg-white w-96 h-10 rounded-2xl'/>
          <button onClick={handleSearch} className='mx-7 border px-5 py-3 rounded-md hover:bg-circular-gradient from-C to-F'>Search</button>
        </div>
        <hr  className='my-10 border-D '/>
        
        {error && <div>Error: {error.message}</div>}
        <div className="news-cards flex flex-wrap flex-grow justify-center gap-16">
          {articles.map((article, index) => (
            <Article key={index} article={article} />
          ))}
        </div>
      </div>
    </>
  );
}

