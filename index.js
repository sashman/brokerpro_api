const { GraphQLServer } = require("graphql-yoga")
const { prisma } = require('./generated/prisma-client')
const morgan = require("morgan")
const PORT = 4000;

const resolvers = {
  Query: {
    policies: prisma.policies,
    policy:  (_, { id }) => prisma.policies.where({ id }),
    customers: prisma.customers,
    customer:  (_, { id }) => prisma.customers.where({ id })
  },
  Mutation: {
    // createPolicy: (_, { id }) => prisma.policies.where({ id }),
    createCustomer: (_, { customer }) => prisma.createCustomer(customer),
    updateCustomer: (_, { customer, id }) =>
      prisma.updateCustomer({ data: customer, where: { id } })
  }
}

const server = new GraphQLServer({
  port: PORT || 4000,
  typeDefs: './schema.graphql',
  resolvers,
  context: {
    prisma
  },
})

server.express.use(morgan("combined"))
server.start(() =>
  console.log(`GraphQL server is running on http://localhost:${PORT}`)
)
