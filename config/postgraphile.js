const { postgraphile } = require('postgraphile')

const { DATABASE, PG_USER, PASSWORD, HOST, PG_PORT, PG_URL } = process.env

module.exports = postgraphile(
   /* {
        database: DATABASE,
        user: PG_USER,
        password: PASSWORD,
        host: HOST,
        port: PG_PORT,
  },  
   */ 
    PG_URL,
    'public',
    {
        watchPg: true,
        graphiql: true,
        enhanceGraphiql: true, // permet d'avoir l'explorer
    }
);