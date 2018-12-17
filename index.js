const { GraphQLServer } = require("graphql-yoga")
const _ = require("lodash")
const { prisma } = require("./generated/prisma-client")
const morgan = require("morgan")
const PORT = 4000

const resolvers = {
  Query: {
    policies: () => prisma.policies(),
    policy: (_, { id }) => prisma.policy({ id }),
    policyCount: () => ({
      total: prisma
        .policiesConnection()
        .aggregate()
        .count(),
      long_term: prisma
        .policiesConnection({ where: { long_term_agreement: true } })
        .aggregate()
        .count()
    }),
    policyPremiumTotal: async () => {
      const policies = await prisma.policies()
      const total = _.sumBy(policies, ({ premium_pennies }) => premium_pennies)
      const long_term = _.sumBy(
        policies.filter(({ long_term_agreement }) => long_term_agreement),
        ({ premium_pennies }) => premium_pennies
      )

      return {
        total,
        long_term
      }
    },
    policiesByRenewal: (_, { from, to }) =>
      prisma.policies({
        where: {
          AND: [{ renewal_date_gte: from }, { renewal_date_lte: to }]
        }
      }),
    customers: () => prisma.customers(),
    customer: (_, { id }) => prisma.customer({ id })
  },
  Mutation: {
    createCustomer: (_, { customer }) => prisma.createCustomer(customer),
    updateCustomer: (_, { customer, id }) =>
      prisma.updateCustomer({ data: customer, where: { id } }),
    deleteCustomer: (_, { id }) => prisma.deleteCustomer({ id }),
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
      prisma.updatePolicy({ data: policy, where: { id } }),
    deletePolicy: (_, { id }) => prisma.deletePolicy({ id })
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
