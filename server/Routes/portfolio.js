// const express = require('express');
// const portfolioController = require('../controllers/portfolioController');
// const router = express.Router();

// router.get('/', portfolioController.getPortfolio);
// router.post('/add', portfolioController.addStockToPortfolio);

// module.exports = router;
const express = require('express');
const { getPortfolio, addStockToPortfolio } = require('../controllers/portfolioController');
const { protect } = require('../middlewares/authmiddleware');
const router = express.Router();

router.get('/', protect, getPortfolio);
router.post('/add', protect, addStockToPortfolio);

module.exports = router;
