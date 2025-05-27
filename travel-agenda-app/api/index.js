const express = require('express');
const cors = require('cors');
const agendaRoutes = require('../src/routes/agendaRoutes');
const serverless = require('serverless-http');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', agendaRoutes);

module.exports = serverless(app);
