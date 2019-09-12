const _ = require('lodash/core')

const users = [
  {
    id: 123,
    firstName: 'Bill',
    age: 30
  },
  {
    id: 124,
    firstName: 'Samantha',
    age: 24
  }
]

const resolvers = {
  Query: {
    user: (parent, args, context, info) => {
      return _.find(users, { id: parseInt(args.id) })
    }
  }
}

module.exports = resolvers
