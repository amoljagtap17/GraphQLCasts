const axios = require('../axios')

const resolvers = {
  Query: {
    user: async (parent, args, context, info) => {
      const response = await axios.get(`/users/${args.id}`)

      return response.data
    },
    company: async (parent, args, context, info) => {
      const response = await axios.get(`/companies/${args.id}`)

      return response.data
    }
  },
  User: {
    async company(user) {
      const response = await axios.get(`/companies/${user.companyId}`)

      return response.data
    }
  }
}

module.exports = resolvers
