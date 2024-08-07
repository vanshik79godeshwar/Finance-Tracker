import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Article from '../components/Article';
import Navbar from '../components/Navbar';
import api from '../utils/api'

export default function News() {
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state

  const fetchNews = async () => {
    setLoading(true); // Start loading
    try {
      const response = await api.get(`/api/news?query=${query}`);
      setArticles(response.data.articles);
      setLoading(false); // End loading
    } catch (error) {
      setError(error);
      setLoading(false); // End loading
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
          <input
            type="text"
            value={query}
            onChange={handleInputChange}
            placeholder="eg.India, Trading"
            className="text-B px-10 mx-7 bg-white w-96 h-10 rounded-2xl"
          />
          <button
            onClick={handleSearch}
            className="mx-7 border px-5 py-3 rounded-md hover:bg-circular-gradient from-C to-F"
          >
            Search
          </button>
        </div>
        <hr className="my-10 border-D" />

        {loading ? (
          <div className="flex justify-center items-center h-96">
            <svg
              className="animate-spin h-20 w-20 text-blue-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8h8a8 8 0 01-8 8V12H4z"
              ></path>
            </svg>
          </div>
        ) : error ? (
          <div>Error: {error.message}</div>
        ) : (
          <div className="news-cards flex flex-wrap flex-grow justify-center gap-16">
            {articles.map((article, index) => (
              <Article key={index} article={article} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
