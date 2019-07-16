const express = require('express');

const server = express();
const router = require('./carDealers/carRoutes')

server.use(express.json());
server.use(express.urlencoded({extended:true}))
server.use('/api/cars', router)

module.exports = server;