// const Portfolio = require('../models/Portfolio');

// exports.getPortfolio = async (req, res) => {
//     try {
//         const portfolio = await Portfolio.findOne({ user: req.user.id }).populate('stocks.stock');
//         res.json(portfolio);
//     } catch (error) {
//         res.status(500).send('Error fetching portfolio');
//     }
// };

// exports.addStockToPortfolio = async (req, res) => {
//     try {
//         const portfolio = await Portfolio.findOne({ user: req.user.id });
//         portfolio.stocks.push(req.body);
//         await portfolio.save();
//         res.status(200).json(portfolio);
//     } catch (error) {
//         res.status(500).send('Error adding to portfolio');
//     }
// };
const Portfolio = require('../models/Portfolio');

exports.getPortfolio = async (req, res) => {
  try {
    const portfolio = await Portfolio.findOne({ user: req.user.id });
    res.json(portfolio);
  } catch (err) {
    res.status(500).json({ message: 'Failed to retrieve portfolio' });
  }
};

exports.addStockToPortfolio = async (req, res) => {
  const { symbol, quantity, purchasePrice } = req.body;
  try {
    let portfolio = await Portfolio.findOne({ user: req.user.id });

    if (!portfolio) {
      portfolio = new Portfolio({ user: req.user.id, stocks: [] });
    }

    portfolio.stocks.push({ symbol, quantity, purchasePrice });
    await portfolio.save();

    res.json(portfolio);
  } catch (err) {
    res.status(500).json({ message: 'Failed to add stock to portfolio' });
  }
};

