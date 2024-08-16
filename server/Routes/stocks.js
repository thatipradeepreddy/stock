// const express = require('express');
// const stockController = require('../controllers/stockController');
// const router = express.Router();

// router.get('/real-time/:symbol', stockController.getRealTimeStock);
// router.post('/watchlist', stockController.addStockToWatchlist);

// module.exports = router;
const express = require('express');
const { getStock } = require('../controllers/stockController');
const router = express.Router();

router.get('/:symbol', getStock);

module.exports = router;
