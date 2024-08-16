import React from 'react';
import TradingViewWidget from 'react-tradingview-widget';

function Charts({ symbol }) {
  return (
    <div>
      <TradingViewWidget symbol={symbol} />
    </div>
  );
}

export default Charts;
