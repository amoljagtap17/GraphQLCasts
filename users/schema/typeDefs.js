const { gql } = require('apollo-server-express')

const typeDefs = gql`
  type User {
    id: ID
    firstName: String
    age: Int
  }

  type Query {
    user(id: ID!): User
  }
`

module.exports = typeDefs
