import Client from '../models/Client.js';

export const addClient = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    const newClient = new Client({
      name: name,
      email: email,
      phone: phone,
      message: message,
    });
    const client = await newClient.save();
    res.json(client);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Client is not added',
    });
  }
};
