// const mongoose = require('mongoose');

// const portfolioSchema = new mongoose.Schema({
//     user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
//     stocks: [{
//         stock: { type: mongoose.Schema.Types.ObjectId, ref: 'Stock' },
//         quantity: Number,
//         purchasePrice: Number,
//     }]
// });

// module.exports = mongoose.model('Portfolio', portfolioSchema);
const mongoose = require('mongoose');

const portfolioSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  stocks: [
    {
      symbol: { type: String, required: true },
      quantity: { type: Number, required: true },
      purchasePrice: { type: Number, required: true },
    },
  ],
});

const Portfolio = mongoose.model('Portfolio', portfolioSchema);
module.exports = Portfolio;
