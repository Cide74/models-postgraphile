const { postgraphile } = require('postgraphile')

const { DATABASE, PG_USER, PASSWORD, HOST, PG_PORT, PG_URL } = process.env

module.exports = postgraphile(

  /* 
  {
    database: DATABASE,
    user: PG_USER,
    password: PASSWORD,
    host: HOST,
    port: PG_PORT,
  },  
  DATABASE_URL || "postgres://user:pass@host:5432/dbname",
  */ 
  PG_URL,
  'public',
  {
    watchPg: true,
    graphiql: true,
    // graphiql: false, //! en mode production
    enhanceGraphiql: true, //* permet d'avoir l'explorer
    exportJsonSchemaPath: ('./graphql/schema.json'),
    exportGqlSchemaPath: ('./graphql/schema2.graphql'),
  }
);