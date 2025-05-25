const express = require('express');
const cors = require('cors');
const agendaRoutes = require('../src/routes/agendaRoutes');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', agendaRoutes);

module.exports = app;
