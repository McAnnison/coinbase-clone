import mongoose from 'mongoose';
import Crypto from './Crypto.js';
import dotenv from 'dotenv';

dotenv.config();

const initialCoins = [
  { name: 'Bitcoin', symbol: 'BTC', price: 65000, image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png', change24h: 2.5 },
  { name: 'Ethereum', symbol: 'ETH', price: 3500, image: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png', change24h: 4.8 },
  { name: 'Solana', symbol: 'SOL', price: 145, image: 'https://assets.coingecko.com/coins/images/4128/large/solana.png', change24h: -1.2 },
  { name: 'Cardano', symbol: 'ADA', price: 0.45, image: 'https://assets.coingecko.com/coins/images/975/large/cardano.png', change24h: 10.5 },
  { name: 'Polkadot', symbol: 'DOT', price: 7.20, image: 'https://assets.coingecko.com/coins/images/12171/large/polkadot.png', change24h: 0.5 },
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to DB for seeding...');
    
    await Crypto.deleteMany({});
    await Crypto.insertMany(initialCoins);
    
    console.log('Database seeded successfully!');
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedDB();