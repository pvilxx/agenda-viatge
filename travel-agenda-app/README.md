# Agenda de Viatge - Gestió de Clients

## Overview
Aplicació Node.js + Express + MySQL per gestionar clients d'una agència de viatges. Permet crear, consultar, editar i eliminar clients via API REST i des d'un frontend bàsic.

## Tecnologies
- Node.js
- Express
- MySQL
- dotenv
- express-validator

## Estructura del projecte
```
travel-agenda-app
├── src
│   ├── app.js
│   ├── config
│   │   └── db.js
│   ├── controllers
│   │   └── agendaController.js
│   ├── models
│   │   └── agendaModel.js
│   ├── routes
│   │   └── agendaRoutes.js
│   └── utils
│       └── index.js
├── public
│   ├── index.html
│   ├── style.css
│   └── app.js
├── .env.example
├── .gitignore
├── package.json
├── README.md
```

## Setup
1. Clona el repositori i instal·la dependències:
   ```bash
   git clone <repository-url>
   cd travel-agenda-app
   npm install
   ```
2. Crea la base de dades MySQL i la taula `clients`:
   ```sql
   CREATE TABLE clients (
     id INT AUTO_INCREMENT PRIMARY KEY,
     nom VARCHAR(100) NOT NULL,
     cognoms VARCHAR(100) NOT NULL,
     telefon VARCHAR(30) NOT NULL,
     email VARCHAR(100) NOT NULL,
     destinacio VARCHAR(100) NOT NULL,
     data_creacio DATETIME NOT NULL
   );
   ```
3. Crea un fitxer `.env` a partir de `.env.example` i posa les teves dades.
4. Executa el projecte:
   ```bash
   npm start
   ```

## API Endpoints

### Ping
- **GET /api/ping**
  - Resposta: `{ "message": "pong" }`

### CRUD Clients
- **GET /api/clients**
  - Llista tots els clients.
- **GET /api/clients?destination=Paris**
  - Llista clients filtrats per destinació.
- **GET /api/clients/:id**
  - Obté un client per ID.
- **POST /api/clients**
  - Crea un client nou.
  - Body:
    ```json
    {
      "nom": "Anna",
      "cognoms": "Serra",
      "telefon": "600123456",
      "email": "anna@exemple.com",
      "destinacio": "Paris"
    }
    ```
- **PUT /api/clients/:id**
  - Edita un client existent.
  - Body igual que POST.
- **DELETE /api/clients/:id**
  - Elimina un client.

### Exemples de resposta
- **GET /api/clients**
  ```json
  [
    {
      "id": 1,
      "nom": "Anna",
      "cognoms": "Serra",
      "telefon": "600123456",
      "email": "anna@exemple.com",
      "destinacio": "Paris",
      "data_creacio": "2024-05-25T10:00:00.000Z"
    }
  ]
  ```

## Frontend
- Pàgina de benvinguda amb el nom de l'alumne.
- Gestió de clients: taula, formulari, cercador.

## Desplegament
- Es pot desplegar a Railway.app. Configura les variables d'entorn i la base de dades.

## Autor
Blai Vilar