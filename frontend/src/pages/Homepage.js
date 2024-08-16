import React, { useEffect, useState } from 'react';
import StockList from '../components/StockList';
import axios from 'axios';

function HomePage() {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    const fetchStocks = async () => {
      const response = await axios.get('http://localhost:5000/api/stocks/AAPL');
      setStocks(response.data);
    };
    fetchStocks();
  }, []);

  return (
    <div>
      <h1>Stock Market</h1>
      <StockList stocks={stocks} />
    </div>
  );
}

export default HomePage;
