const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');

const graphql = require('./graphql');

const app = express();

mongoose.connect('mongodb://localhost:27017/conexia', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

graphql.applyMiddleware({ app })

app.use(cors());
app.use(express.json());

app.listen({ port: 4000 }, () => {
  console.log(`🚀 Server ready at http://localhost:4000${graphql.graphqlPath}`)
});
