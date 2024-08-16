import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TradingViewWidget from 'react-tradingview-widget';

function StockDetails() {
  const { symbol } = useParams();
  const [stockData, setStockData] = useState(null);

  useEffect(() => {
    // Fetch stock data from API or use sample data
    const fetchData = async () => {
      const response = await fetch(`http://localhost:5000/api/stocks/${symbol}`);
      const data = await response.json();
      setStockData(data);
    };
    fetchData();
  }, [symbol]);

  return (
    <div>
      {stockData && (
        <>
          <h1>{stockData.name}</h1>
          <TradingViewWidget symbol={symbol} />
          <p>Current Price: {stockData.price}</p>
          <p>Volume: {stockData.volume}</p>
          {/* Add more stock details here */}
        </>
      )}
    </div>
  );
}

export default StockDetails;
