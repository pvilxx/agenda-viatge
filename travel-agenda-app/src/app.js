const express = require('express');
const cors = require('cors');
const agendaRoutes = require('./routes/agendaRoutes');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', agendaRoutes);
app.use(express.static('public'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});