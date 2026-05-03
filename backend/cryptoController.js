import Crypto from './Crypto.js';

export const getAllCoins = async (req, res) => {
  try {
    const coins = await Crypto.find();
    res.status(200).json({ status: 'success', results: coins.length, data: { coins } });
  } catch (err) {
    res.status(400).json({ status: 'fail', message: err.message });
  }
};

export const getTopGainers = async (req, res) => {
  try {
    // Sort by change24h in descending order (highest percentage increase first)
    const gainers = await Crypto.find().sort({ change24h: -1 });
    res.status(200).json({ status: 'success', results: gainers.length, data: { coins: gainers } });
  } catch (err) {
    res.status(400).json({ status: 'fail', message: err.message });
  }
};

export const getNewListings = async (req, res) => {
  try {
    // Sort by createdAt in descending order (newest to oldest)
    const newListings = await Crypto.find().sort({ createdAt: -1 });
    res.status(200).json({ status: 'success', results: newListings.length, data: { coins: newListings } });
  } catch (err) {
    res.status(400).json({ status: 'fail', message: err.message });
  }
};

export const addCoin = async (req, res) => {
  try {
    const newCoin = await Crypto.create(req.body);
    res.status(201).json({ status: 'success', data: { coin: newCoin } });
  } catch (err) {
    res.status(400).json({ status: 'fail', message: err.message });
  }
};