// const Stock = require('../models/Stock');
// const axios = require('axios');

// exports.getRealTimeStock = async (req, res) => {
//     const { symbol } = req.params;
//     try {
//         const response = await axios.get(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${process.env.ALPHA_VANTAGE_API_KEY}`);
//         const stockData = response.data['Global Quote'];
//         res.json(stockData);
//     } catch (error) {
//         res.status(500).send('Error fetching stock data');
//     }
// };

// exports.addStockToWatchlist = async (req, res) => {
//     try {
//         const stock = await Stock.findOne({ symbol: req.body.symbol });
//         req.user.watchlist.push(stock);
//         await req.user.save();
//         res.status(200).json(req.user.watchlist);
//     } catch (error) {
//         res.status(500).send('Error adding to watchlist');
//     }
// };
const { getStockData } = require('../services/stockServices');

exports.getStock = async (req, res) => {
  const { symbol } = req.params;
  try {
    const data = await getStockData(symbol);
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: 'Failed to retrieve stock data' });
  }
};

