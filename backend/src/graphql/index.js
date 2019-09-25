const { ApolloServer } = require('apollo-server-express');

module.exports = new ApolloServer({
  typeDefs: require('./typeDefs'),
  resolvers: require('./resolvers')
});
