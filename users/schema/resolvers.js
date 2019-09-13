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
  },
  Company: {
    async users(company) {
      const response = await axios.get(`/companies/${company.id}/users`)

      return response.data
    }
  },
  Mutation: {
    addUser: async (parent, args, context, info) => {
      const response = await axios.post(`/users`, args.user)

      return response.data
    },
    deleteUser: async (parent, args, context, info) => {
      const response = await axios.delete(`/users/${args.userId}`)

      return response.data
    },
    editUser: async (parent, args, context, info) => {
      // patch ignores the id in args object
      const response = await axios.patch(`/users/${args.id}`, args)

      return response.data
    }
  }
}

module.exports = resolvers
