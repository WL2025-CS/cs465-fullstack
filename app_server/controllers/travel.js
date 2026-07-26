'use strict';

const Trip = require('../models/travel');

module.exports.index = (req, res) => {
  Trip.find({})
    .then((trips) => {
      res.render('travel', { title: 'Travel', trips: trips });
    })
    .catch((err) => {
      return res.status(500).render('error', { message: 'Unable to load trips', error: err });
    });
};