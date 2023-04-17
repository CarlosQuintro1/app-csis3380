import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Transactions() {
  const [transactions, setTransactions] = useState([]);
  const [searchTick, setSearchTick] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:4000/transaction/')
      .then((response) => {
        setTransactions(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const filteredTransactions = transactions.filter((transaction) =>
    transaction.Tick.toLowerCase().includes(searchTick.toLowerCase())
  );

  return (
    <div>
      <Navbar />
      <h1>Welcome to the Transaction History Page</h1>
      <input
        type="text"
        placeholder="Search by tick"
        value={searchTick}
        onChange={(event) => setSearchTick(event.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Tick</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {filteredTransactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.Transaction}</td>
              <td>{transaction.Tick}</td>
              <td>{transaction.Price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Footer />
    </div>
  );
}