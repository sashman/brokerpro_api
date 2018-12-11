const { GraphQLServer } = require("graphql-yoga")
const { prisma } = require("./generated/prisma-client")
const morgan = require("morgan")
const PORT = 4000

const resolvers = {
  Query: {
    policies: () => prisma.policies(),
    policy: (_, { id }) => prisma.policy({ id }),
    customers: () => prisma.customers(),
    customer: (_, { id }) => prisma.customer({ id })
  },
  Mutation: {
    createCustomer: (_, { customer }) => prisma.createCustomer(customer),
    updateCustomer: (_, { customer, id }) =>
      prisma.updateCustomer({ data: customer, where: { id } }),
    createPolicy: (_, { policy, customer_id }) =>
      prisma.createPolicy({
        ...policy,
        customer: {
          connect: {
            id: customer_id
          }
        }
      }),
    updatePolicy: (_, { policy, id }) =>
      prisma.updatePolicy({ data: policy, where: { id } })
  },
  Policy: {
    customer: ({ id }) => prisma.policy({ id }).customer()
  }
}

const server = new GraphQLServer({
  port: PORT || 4000,
  typeDefs: "./schema.graphql",
  resolvers,
  context: {
    prisma
  }
})

server.express.use(morgan("combined"))
server.start(() =>
  console.log(`GraphQL server is running on http://localhost:${PORT}`)
)
