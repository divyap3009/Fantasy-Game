const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const playerRoutes = require('./routes/players');
const teamRoutes = require('./routes/teams');
const db = require("./config/db")

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/players', playerRoutes);
app.use('/teams', teamRoutes);

const port = 5000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
