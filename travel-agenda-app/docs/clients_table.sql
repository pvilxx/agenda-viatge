-- Script de creació de la taula clients i inserció de dades de prova
CREATE TABLE IF NOT EXISTS clients (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nom VARCHAR(100) NOT NULL,
  cognoms VARCHAR(100) NOT NULL,
  telefon VARCHAR(30) NOT NULL,
  email VARCHAR(100) NOT NULL,
  destinacio VARCHAR(100) NOT NULL,
  data_creacio DATETIME NOT NULL
);

INSERT INTO clients (nom, cognoms, telefon, email, destinacio, data_creacio) VALUES
('Anna', 'Serra', '600123456', 'anna@exemple.com', 'Paris', '2024-05-25 10:00:00'),
('Joan', 'Martí', '600654321', 'joan@exemple.com', 'Roma', '2024-05-24 09:30:00');
