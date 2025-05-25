const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const agendaController = require('../controllers/agendaController');

const clientValidation = [
    body('nom').notEmpty().withMessage('El nom és obligatori'),
    body('cognoms').notEmpty().withMessage('Els cognoms són obligatoris'),
    body('telefon').notEmpty().withMessage('El telèfon és obligatori'),
    body('email').isEmail().withMessage('Email no vàlid'),
    body('destinacio').notEmpty().withMessage('La destinació és obligatòria')
];

router.get('/ping', (req, res) => res.json({ message: 'pong' }));
router.get('/clients', agendaController.getAllClients);
router.get('/clients/:id', agendaController.getClientById);
router.post('/clients', clientValidation, agendaController.createClient);
router.put('/clients/:id', clientValidation, agendaController.updateClient);
router.delete('/clients/:id', agendaController.deleteClient);

module.exports = router;