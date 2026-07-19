'use strict';

const fs = require('fs');
const path = require('path');

module.exports.index = (req, res) => {
  const tripsFile = path.join(__dirname, '..', 'data', 'trips.json');

  fs.readFile(tripsFile, 'utf8', (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).render('error', { message: 'Unable to load trips', error: err });
    }

    const trips = JSON.parse(data);
    res.render('travel', { title: 'Travel', trips: trips });
  });
};