const { validationResult } = require('express-validator');
const db = require('../config/db');

exports.getAllClients = (req, res) => {
    const { destination } = req.query;
    let sql = 'SELECT * FROM clients';
    let params = [];
    if (destination) {
        sql += ' WHERE destinacio = ?';
        params.push(destination);
    }
    db.query(sql, params, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json(results);
    });
};

exports.getClientById = (req, res) => {
    const { id } = req.params;
    db.query('SELECT * FROM clients WHERE id = ?', [id], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        if (results.length === 0) return res.status(404).json({ message: 'Client not found' });
        res.status(200).json(results[0]);
    });
};

exports.createClient = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { nom, cognoms, telefon, email, destinacio } = req.body;
    const data_creacio = new Date();
    const newClient = { nom, cognoms, telefon, email, destinacio, data_creacio };
    db.query('INSERT INTO clients SET ?', newClient, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ id: results.insertId, ...newClient });
    });
};

exports.updateClient = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { id } = req.params;
    const { nom, cognoms, telefon, email, destinacio } = req.body;
    const updatedClient = { nom, cognoms, telefon, email, destinacio };
    db.query('UPDATE clients SET ? WHERE id = ?', [updatedClient, id], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        if (results.affectedRows === 0) return res.status(404).json({ message: 'Client not found' });
        res.status(200).json({ id, ...updatedClient });
    });
};

exports.deleteClient = (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM clients WHERE id = ?', [id], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        if (results.affectedRows === 0) return res.status(404).json({ message: 'Client not found' });
        res.status(204).send();
    });
};