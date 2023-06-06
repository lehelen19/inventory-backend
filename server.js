const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();
require('./config/database');

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
// CHECK TOKEN HERE

// Add routes here
app.use('/api/items', require('./routes/api/foodItems'));

const port = process.env.PORT || 3001;

app.listen(port, function () {
  console.log(`Express is listening on port ${port}!`);
});
