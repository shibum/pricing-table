const path = require('path');
const express = require('express');

const pricingTableController = require('../controllers/pricingTable');
const router = express.Router();

router.get('/', pricingTableController.getPriceTires);

module.exports = router;
