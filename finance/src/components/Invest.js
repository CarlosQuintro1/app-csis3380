import React, { useState } from 'react';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import Navbar from './Navbar';
import Footer from './Footer';

const Invest = () => {
  
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [exchange, setExchange] = useState('');
  const [currency, setCurrency] = useState('');
  const [cashFlow, setCashFlow] = useState([]);

  const fetchData = async (symbol) => {
    try {
      const response = await axios.get(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${symbol}&apikey=ZYM7CUCE7B1VJIIX`);
      setName(response.data.Name);
      setExchange(response.data.Exchange);
      setCurrency(response.data.Currency);

      const response2 = await axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${symbol}&apikey=ZYM7CUCE7B1VJIIX`);
      const stockData = response2.data['Time Series (Daily)'];
      const formattedData = Object.keys(stockData).map((date) => ({
        date,
        price: parseFloat(stockData[date]['4. close'])
      }));
      formattedData.sort((a, b) => new Date(b.date) - new Date(a.date)); // sort data array in descending order based on the date
      setData(formattedData);

      const response3 = await axios.get(`https://www.alphavantage.co/query?function=CASH_FLOW&symbol=${symbol}&apikey=ZYM7CUCE7B1VJIIX`);
      const cashFlowData = response3.data['annualReports'].map((report) => ({
        fiscalDate: report.fiscalDateEnding,
        operatingCashFlow: report.operatingCashflow,
        investingCashFlow: report.investingCashflow,
        financingCashFlow: report.financingCashflow,
      }));
      setCashFlow(cashFlowData);
    } catch (error) {
      console.log(error);
    }
  };

  const [symbol, setSymbol] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData(symbol);
  };

  return (
    <div>
      <Navbar/>
      <head>
    <title>Discover Multiple Stocks</title>
  </head>
    <header>
      <h1>Discover Multiple Stocks</h1>
    </header>
      <form onSubmit={handleSubmit}>
        <label>
          Search Stock:
          <input type="text" value={symbol} onChange={(event) => setSymbol(event.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </form>
      <h2>{name} ({symbol})</h2>
      <p>Exchange: {exchange}</p>
      <p>Currency: {currency}</p>
      <div className="chart-table-container">
        <div className="chart-container">
          <LineChart width={800} height={300} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <XAxis dataKey="date" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend/>
            <Line type="monotone" dataKey="price" stroke="#000000" />
          </LineChart>
        </div>
        <div className="table-container">
          <h3>Cash Flow Statements</h3>
          <table>
            <thead>
              <tr>
                <th>Fiscal Date Ending</th>
                <th>Operating Cash Flow</th>
                <th>Investing Cash Flow</th>
                <th>Financing Cash Flow</th>
              </tr>
            </thead>
            <tbody>
              {cashFlow.map((report) => (
                <tr key={report.fiscalDate}>
                  <td>{report.fiscalDate}</td>
                  <td>{report.operatingCashFlow}</td>
                  <td>{report.investingCashFlow}</td>
                  <td>{report.financingCashFlow}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
};

  
  

export default Invest