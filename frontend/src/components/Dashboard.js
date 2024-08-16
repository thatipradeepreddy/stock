import React from 'react';
import { useSelector } from 'react-redux';

const Dashboard = () => {
    // Accessing the state using useSelector
    const stocks = useSelector((state) => state.stocks?.stocks || []);
    const loading = useSelector((state) => state.stocks?.loading);
    const error = useSelector((state) => state.stocks?.error);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h1>Stocks Dashboard</h1>
            <ul>
                {stocks.map((stock) => (
                    <li key={stock.symbol}>{stock.name} - {stock.price}</li>
                ))}
            </ul>
        </div>
    );
};

export default Dashboard;
