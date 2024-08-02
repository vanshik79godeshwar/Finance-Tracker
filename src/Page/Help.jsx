import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Sidebar from '../components/User/Sidebar';
import './Help.css'; // Ensure your CSS file is imported

export default function Help({ user }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const articles = [
    {
      title: "How do I get real-time stock updates?",
      content: "You can get real-time stock updates by subscribing to our stock update service. We provide live data and notifications for major stock exchanges."
    },
    {
      title: "Where can I find the latest financial news?",
      content: "Our website has a dedicated News section where you can find the latest financial news and market trends. Stay updated with the most recent articles and reports."
    },
    {
      title: "How can I read and follow your financial blogs?",
      content: "Visit our Blogs section to read articles on various financial topics. You can follow our blogs for insights, tips, and updates related to personal finance and investing."
    },
    {
      title: "How do I use the finance management tools?",
      content: "Our finance management tools can be accessed through the Finance section of our website. You can track your expenses, set savings goals, and manage your overall financial health."
    },
    {
      title: "How do I calculate my EMI?",
      content: "Use our EMI calculator tool available in the EMI section. Simply input the loan amount, interest rate, and tenure to get your estimated monthly EMI."
    },
    {
      title: "How can I create and manage my monthly budget?",
      content: "Our Monthly Budget tool helps you set and manage your budget. Enter your income and expenses to create a budget plan and track your spending."
    },
    {
      title: "What features are included in the stock tracking?",
      content: "Our stock tracking feature includes real-time price updates, historical data, performance charts, and alerts for price changes and market news."
    },
    {
      title: "Can I customize the financial news I receive?",
      content: "Yes, you can customize your news feed by selecting topics and categories that interest you. Manage your preferences in the News section of your account settings."
    },
    {
      title: "Are there any guides or tutorials for using the finance tools?",
      content: "Yes, we provide detailed guides and tutorials for all our finance tools. Visit the Help section to access user manuals and video tutorials."
    },
    {
      title: "How secure is my financial data on your website?",
      content: "We take data security very seriously. Our website uses advanced encryption and security protocols to protect your financial information from unauthorized access."
    },
    {
      title: "Can I access the tools on my mobile device?",
      content: "Yes, our website is optimized for mobile devices. You can access all our finance tools and features from your smartphone or tablet."
    },
    {
      title: "How do I reset my password?",
      content: "If you need to reset your password, go to the login page and click on 'Forgot Password.' Follow the instructions to reset your password via email."
    },
    {
      title: "Who can I contact for support?",
      content: "For support, you can contact our customer service team through the Contact Us page. We offer support via email, phone, and live chat."
    },
    {
      title: "Do you offer any financial planning services?",
      content: "Yes, we offer financial planning services through our partners. You can find more information and schedule a consultation in the Financial Planning section."
    },
    {
      title: "Can I track my investments and portfolio?",
      content: "Yes, our investment tracking feature allows you to monitor your portfolio's performance, view historical data, and receive insights on your investments."
    }
  ];

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex">
      <Sidebar user={user} />
      <div className="flex-1 bg-black">
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
            <h2>Commonly Asked Questions</h2>
            <div className="cards">
              {articles.map((article, index) => (
                <div
                  key={index}
                  className={`card ${article.colorClass} ${activeIndex === index ? 'card-expanded' : ''}`}
                  onClick={() => handleToggle(index)}
                >
                  <p className="tip">{article.title}</p>
                  {activeIndex === index && (
                    <p className="second-text">{article.content}</p>
                  )}
                </div>
              ))}
              <br>
              </br>

              <p st>Still have questions for us?</p>
              <div className="flex justify-center">
                <Link to="/ContactUs" className="contact-link">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
