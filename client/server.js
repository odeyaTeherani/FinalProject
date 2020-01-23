const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
// app.use(express.static(__dirname + '/dist/client'));

app.get('squre', function(req,res) {
  const x = 12;
  const squre = x*x;
  res.json({res:squre});
});

app.get('multiply', function(req,res) {
  const x = 12;
  const squre = x*2;
  res.json({res:squre});
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
