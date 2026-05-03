import mongoose from 'mongoose';

const cryptoSchema = new mongoose.Schema({
  name: { type: String, required: true },
  symbol: { type: String, required: true, uppercase: true },
  price: { type: Number, required: true },
  image: { type: String, required: true }, // URL to the icon
  change24h: { type: Number, required: true }, // e.g., +2.5
  createdAt: { type: Date, default: Date.now }
});

const Crypto = mongoose.model('Crypto', cryptoSchema);
export default Crypto;