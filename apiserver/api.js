const api = require("express").Router();
const sampleRouter = require('./routes/sample');


api.use('/', sampleRouter);


module.exports = api;