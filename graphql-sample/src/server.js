const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const db = require('./db');
const fs = require('fs');
const resolvers = require('./resolvers');
const {makeExecutableSchema} = require('graphql-tools')
const  {graphiqlExpress,graphqlExpress} = require('apollo-server-express')

const typeDefs = fs.readFileSync('/home/btamilma/nodejs-learning/serverless-learning/g-sample/src/schema.graphql',{encoding:'utf-8'})
const schema = makeExecutableSchema({typeDefs, resolvers})

const app = express();
app.use(cors(), bodyParser.json());
app.use('/graphql',graphqlExpress({schema}))
app.use('/graphiql',graphiqlExpress({endpointURL:'/graphql'}))
const port = process.env.PORT || 9000;
app.listen(
   port, () => console.info(
      `Server started on port ${port}`
   )
);