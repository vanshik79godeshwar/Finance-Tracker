import React, { useState } from 'react';
import Sidebar from '../components/User/Sidebar';
import './Help.css';

export default function Help({ user }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const articles = [
    "Essential building blocks for Dropbox",
    "Tips and tricks for getting started with Dropbox",
    "Start using your new Dropbox Business account",
    "Get started as a new team admin",
    "Share files and folders",
    "Recover and restore deleted files or folders",
    "Look up a Dropbox charge on your credit card",
    "Password reset",
    "Using camera uploads",
    "Recover and restore deleted files or folders",
    "Look up a Dropbox charge on your credit card",
    "Password reset",
    "Using camera uploads",
    "Recover and restore deleted files or folders",
    "Look up a Dropbox charge on your credit card",
    "Password reset",
    "Using camera uploads"
  ];

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex">
      <Sidebar user={user} />
      <div className="flex-1 bg-white">
        <div className="help-page">
          <div className="body-content">
            <div className="intro">
              <h1>Hello, how can we help?</h1>
            </div>
            <div className="search-box">
              <p>
                FAQs, quick fixes, and official info on every Dropbox feature. Just a click away.
              </p>
            </div>
          </div>
          <div className="featured-articles">
            <h2>Commonly asked questions</h2>
            <div className="articles-list">
              {articles.map((article, index) => (
                <div key={index} className="article">
                  <div className="article-title" onClick={() => handleToggle(index)}>
                    {article} →
                  </div>
                  {activeIndex === index && (
                    <div className="article-content">
                      <p>This is the content for {article}.</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
