const express = require('express');
const cors = require('cors');

// Rota MercadoPago:
const MercadoPago = require('./routes/MercadoPago.js');

// Iniciando server
const server = express();

// Criação de middleware:
server.use(express.json());
server.use(cors());

// Rotas:

server.use("/Mercado-Pago", MercadoPago);


module.exports = server;