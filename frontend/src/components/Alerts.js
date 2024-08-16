import React from 'react';

function Alerts({ alerts }) {
  return (
    <div>
      <h3>Price Alerts</h3>
      <ul>
        {alerts.map((alert, index) => (
          <li key={index}>
            {alert.symbol} - Target Price: {alert.targetPrice}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Alerts;
