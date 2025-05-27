const express = require('express');
const cors = require('cors');
const agendaRoutes = require('./routes/agendaRoutes');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', agendaRoutes);
app.use(express.static('public'));

// Endpoint fals per testing de CI
app.get('/api/fake-endpoint', (req, res) => {
  res.json({ message: 'Endpoint fals per testing CI' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});