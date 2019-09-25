const { gql } = require('apollo-server-express');

module.exports = gql`
  type Query {
    todos: [Todo]
    todo(id: ID!): Todo
  }

  type Todo {
    id: ID!
    text: String!
    completed: Boolean
    createdAt: String
    updatedAt: String
  }

  type Result {
    result: Boolean!
  }

  type Mutation {
    createTodo(text: String!): Todo!
    doneTodo(id: ID!): Todo!
    removeTodo(id: ID!): Result!
  }
`;
