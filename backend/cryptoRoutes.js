import express from 'express';
import * as cryptoController from './cryptoController.js';

const router = express.Router();

router.get('/', cryptoController.getAllCoins);
router.get('/gainers', cryptoController.getTopGainers);
router.get('/new', cryptoController.getNewListings);
router.post('/', cryptoController.addCoin);

export default router;