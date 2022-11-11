import mongoose from 'mongoose';

const PortfolioSchems = new mongoose.Schema(
  {
    imageUrl: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

export default mongoose.model('Portfolio', PortfolioSchems);
