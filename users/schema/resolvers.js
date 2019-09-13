const axios = require('../axios')

const resolvers = {
  Query: {
    user: async (parent, args, context, info) => {
      const response = await axios.get(`/users/${args.id}`)

      return response.data
    }
  }
}

module.exports = resolvers
