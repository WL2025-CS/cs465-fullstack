const mongoose = require('mongoose');
const Trip = mongoose.model('trips');

const tripsList = async (req, res) => {
  try {
    const trips = await Trip.find({});
    if (!trips.length) {
      return res.status(404).json({ message: 'No trips found' });
    }
    return res.status(200).json(trips);
  } catch (err) {
    return res.status(500).json({ message: 'Server error', error: err.message });
  }
};

const tripsFindByCode = async (req, res) => {
  try {
    const trip = await Trip.find({ code: req.params.tripCode });
    if (!trip.length) {
      return res.status(404).json({ message: 'Trip not found' });
    }
    return res.status(200).json(trip);
  } catch (err) {
    return res.status(500).json({ message: 'Server error', error: err.message });
  }
};

module.exports = { tripsList, tripsFindByCode };