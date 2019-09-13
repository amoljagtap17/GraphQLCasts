const { gql } = require('apollo-server-express')

const typeDefs = gql`
  type User {
    id: ID
    firstName: String
    age: Int
    company: Company
  }

  type Company {
    id: ID
    name: String
    description: String
    users: [User]
  }

  type Query {
    user(id: ID!): User
    company(id: ID!): Company
  }

  type Mutation {
    addUser(user: UserInput): User
  }

  input UserInput {
    firstName: String!
    age: Int!
    companyId: ID
  }
`

module.exports = typeDefs
