require('dotenv').config();
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const postgraphile = require('../config/postgraphile');

const { PORT } = process.env;

//app.use(cors());
app.use(
  cors({
    origin: "*", // * = tous les sites sans controle
   // origin: "https://adresseDuSite/"
   // origin: "https://localhost/"
  }),
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(postgraphile);

app.listen(PORT, () => (
  console.log(
    `Server running 🚀 on port ${PORT} 🎉 =`,
    `http://localhost:${PORT}/graphiql`,
    `= http://127.0.0.1:${PORT}/graphiql`
  )
));


