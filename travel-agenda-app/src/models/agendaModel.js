const db = require('../config/db');

const ClientModel = {
    getAllClients: async () => {
        const [rows] = await db.execute('SELECT * FROM clients');
        return rows;
    },

    getClientById: async (id) => {
        const [rows] = await db.execute('SELECT * FROM clients WHERE id = ?', [id]);
        return rows[0];
    },

    createClient: async (clientData) => {
        const { nom, cognoms, telefon, email, destinacio } = clientData;
        const data_creacio = new Date();
        const [result] = await db.execute('INSERT INTO clients (nom, cognoms, telefon, email, destinacio, data_creacio) VALUES (?, ?, ?, ?, ?, ?)', [nom, cognoms, telefon, email, destinacio, data_creacio]);
        return { id: result.insertId, ...clientData, data_creacio };
    },

    updateClient: async (id, clientData) => {
        const { nom, cognoms, telefon, email, destinacio } = clientData;
        await db.execute('UPDATE clients SET nom = ?, cognoms = ?, telefon = ?, email = ?, destinacio = ? WHERE id = ?', [nom, cognoms, telefon, email, destinacio, id]);
        return { id, ...clientData };
    },

    deleteClient: async (id) => {
        await db.execute('DELETE FROM clients WHERE id = ?', [id]);
        return { id };
    }
};

module.exports = ClientModel;