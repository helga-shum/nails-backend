import Portfolio from '../models/Portfolio.js';

export const getPortfolio = async (req, res) => {
  try {
    const portfolio = await Portfolio.find().exec();
    res.json(portfolio);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Can not get portfolio',
    });
  }
};
