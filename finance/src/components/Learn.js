import React from 'react';
import Navbar from './Navbar'
import Footer from './Footer'


const Learn = () => {
  return (
    <div>
        <Navbar/>
        <img id = "learn-image" src='inv.jpeg' alt='learn' className='inv-learn'></img>
        <div className="learn-page">
        <h1 className="learn-heading">Learn About Investing</h1>
      
      <div className="investments-container">
        <div className="investment-card">
          <h2 className="investment-title">Stocks</h2>
          <p className="investment-description">
            A type of investment that represents ownership in a company.
            Stocks offer the potential for high returns but also come with
            higher risk than other types of investments.
          </p>
        </div>
        <div className="investment-card">
          <h2 className="investment-title">Bonds</h2>
          <p className="investment-description">
            A type of investment that involves lending money to a company or
            government. Bonds offer lower potential returns than stocks but
            also come with lower risk.
          </p>
        </div>
        <div className="investment-card">
          <h2 className="investment-title">Real Estate</h2>
          <p className="investment-description">
            A type of investment that involves buying property with the goal
            of earning income from rent or appreciation in value. Real estate
            investments can provide steady income and long-term growth.
          </p>
        </div>
        <div className="investment-card">
          <h2 className="investment-title">Cryptocurrencies</h2>
          <p className="investment-description">
            A type of digital currency that uses cryptography to secure
            transactions and control the creation of new units. Cryptocurrencies
            are highly volatile and come with significant risk but can also offer
            high potential returns.
          </p>
        </div>
        <div className="investment-card">
          <h2 className="investment-title">Mutual Funds</h2>
          <p className="investment-description">
            A type of investment that pools money from multiple investors to buy
            a diversified portfolio of stocks, bonds, or other assets. Mutual funds
            offer instant diversification and are managed by professional fund managers,
            but they also come with fees and expenses.
          </p>
        </div>
        <div className="investment-card">
          <h2 className="investment-title">Exchange-Traded Funds (ETFs)</h2>
          <p className="investment-description">
            A type of investment that is similar to mutual funds, but traded on
            stock exchanges like individual stocks. ETFs offer instant diversification,
            low fees, and the flexibility to buy or sell shares throughout the day.
          </p>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
    
  );
};

export default Learn;