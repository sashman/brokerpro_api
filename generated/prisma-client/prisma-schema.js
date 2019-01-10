module.exports = {
  typeDefs: /* GraphQL */ `
    type AggregateCustomer {
      count: Int!
    }

    type AggregatePolicy {
      count: Int!
    }

    type AggregateProduct {
      count: Int!
    }

    type AggregateUser {
      count: Int!
    }

    type BatchPayload {
      count: Long!
    }

    type Customer {
      id: ID!
      createdAt: DateTime!
      updatedAt: DateTime!
      company_name: String!
      company_address: String!
      company_postcode: String!
      company_number: String!
      company_house_match: String
      company_house_description: String
      business_description: String!
      customer_name: String!
      customer_address: String!
      customer_postcode: String!
    }

    type CustomerConnection {
      pageInfo: PageInfo!
      edges: [CustomerEdge]!
      aggregate: AggregateCustomer!
    }

    input CustomerCreateInput {
      company_name: String!
      company_address: String!
      company_postcode: String!
      company_number: String!
      company_house_match: String
      company_house_description: String
      business_description: String!
      customer_name: String!
      customer_address: String!
      customer_postcode: String!
    }

    input CustomerCreateOneInput {
      create: CustomerCreateInput
      connect: CustomerWhereUniqueInput
    }

    type CustomerEdge {
      node: Customer!
      cursor: String!
    }

    enum CustomerOrderByInput {
      id_ASC
      id_DESC
      createdAt_ASC
      createdAt_DESC
      updatedAt_ASC
      updatedAt_DESC
      company_name_ASC
      company_name_DESC
      company_address_ASC
      company_address_DESC
      company_postcode_ASC
      company_postcode_DESC
      company_number_ASC
      company_number_DESC
      company_house_match_ASC
      company_house_match_DESC
      company_house_description_ASC
      company_house_description_DESC
      business_description_ASC
      business_description_DESC
      customer_name_ASC
      customer_name_DESC
      customer_address_ASC
      customer_address_DESC
      customer_postcode_ASC
      customer_postcode_DESC
    }

    type CustomerPreviousValues {
      id: ID!
      createdAt: DateTime!
      updatedAt: DateTime!
      company_name: String!
      company_address: String!
      company_postcode: String!
      company_number: String!
      company_house_match: String
      company_house_description: String
      business_description: String!
      customer_name: String!
      customer_address: String!
      customer_postcode: String!
    }

    type CustomerSubscriptionPayload {
      mutation: MutationType!
      node: Customer
      updatedFields: [String!]
      previousValues: CustomerPreviousValues
    }

    input CustomerSubscriptionWhereInput {
      mutation_in: [MutationType!]
      updatedFields_contains: String
      updatedFields_contains_every: [String!]
      updatedFields_contains_some: [String!]
      node: CustomerWhereInput
      AND: [CustomerSubscriptionWhereInput!]
      OR: [CustomerSubscriptionWhereInput!]
      NOT: [CustomerSubscriptionWhereInput!]
    }

    input CustomerUpdateDataInput {
      company_name: String
      company_address: String
      company_postcode: String
      company_number: String
      company_house_match: String
      company_house_description: String
      business_description: String
      customer_name: String
      customer_address: String
      customer_postcode: String
    }

    input CustomerUpdateInput {
      company_name: String
      company_address: String
      company_postcode: String
      company_number: String
      company_house_match: String
      company_house_description: String
      business_description: String
      customer_name: String
      customer_address: String
      customer_postcode: String
    }

    input CustomerUpdateManyMutationInput {
      company_name: String
      company_address: String
      company_postcode: String
      company_number: String
      company_house_match: String
      company_house_description: String
      business_description: String
      customer_name: String
      customer_address: String
      customer_postcode: String
    }

    input CustomerUpdateOneRequiredInput {
      create: CustomerCreateInput
      update: CustomerUpdateDataInput
      upsert: CustomerUpsertNestedInput
      connect: CustomerWhereUniqueInput
    }

    input CustomerUpsertNestedInput {
      update: CustomerUpdateDataInput!
      create: CustomerCreateInput!
    }

    input CustomerWhereInput {
      id: ID
      id_not: ID
      id_in: [ID!]
      id_not_in: [ID!]
      id_lt: ID
      id_lte: ID
      id_gt: ID
      id_gte: ID
      id_contains: ID
      id_not_contains: ID
      id_starts_with: ID
      id_not_starts_with: ID
      id_ends_with: ID
      id_not_ends_with: ID
      createdAt: DateTime
      createdAt_not: DateTime
      createdAt_in: [DateTime!]
      createdAt_not_in: [DateTime!]
      createdAt_lt: DateTime
      createdAt_lte: DateTime
      createdAt_gt: DateTime
      createdAt_gte: DateTime
      updatedAt: DateTime
      updatedAt_not: DateTime
      updatedAt_in: [DateTime!]
      updatedAt_not_in: [DateTime!]
      updatedAt_lt: DateTime
      updatedAt_lte: DateTime
      updatedAt_gt: DateTime
      updatedAt_gte: DateTime
      company_name: String
      company_name_not: String
      company_name_in: [String!]
      company_name_not_in: [String!]
      company_name_lt: String
      company_name_lte: String
      company_name_gt: String
      company_name_gte: String
      company_name_contains: String
      company_name_not_contains: String
      company_name_starts_with: String
      company_name_not_starts_with: String
      company_name_ends_with: String
      company_name_not_ends_with: String
      company_address: String
      company_address_not: String
      company_address_in: [String!]
      company_address_not_in: [String!]
      company_address_lt: String
      company_address_lte: String
      company_address_gt: String
      company_address_gte: String
      company_address_contains: String
      company_address_not_contains: String
      company_address_starts_with: String
      company_address_not_starts_with: String
      company_address_ends_with: String
      company_address_not_ends_with: String
      company_postcode: String
      company_postcode_not: String
      company_postcode_in: [String!]
      company_postcode_not_in: [String!]
      company_postcode_lt: String
      company_postcode_lte: String
      company_postcode_gt: String
      company_postcode_gte: String
      company_postcode_contains: String
      company_postcode_not_contains: String
      company_postcode_starts_with: String
      company_postcode_not_starts_with: String
      company_postcode_ends_with: String
      company_postcode_not_ends_with: String
      company_number: String
      company_number_not: String
      company_number_in: [String!]
      company_number_not_in: [String!]
      company_number_lt: String
      company_number_lte: String
      company_number_gt: String
      company_number_gte: String
      company_number_contains: String
      company_number_not_contains: String
      company_number_starts_with: String
      company_number_not_starts_with: String
      company_number_ends_with: String
      company_number_not_ends_with: String
      company_house_match: String
      company_house_match_not: String
      company_house_match_in: [String!]
      company_house_match_not_in: [String!]
      company_house_match_lt: String
      company_house_match_lte: String
      company_house_match_gt: String
      company_house_match_gte: String
      company_house_match_contains: String
      company_house_match_not_contains: String
      company_house_match_starts_with: String
      company_house_match_not_starts_with: String
      company_house_match_ends_with: String
      company_house_match_not_ends_with: String
      company_house_description: String
      company_house_description_not: String
      company_house_description_in: [String!]
      company_house_description_not_in: [String!]
      company_house_description_lt: String
      company_house_description_lte: String
      company_house_description_gt: String
      company_house_description_gte: String
      company_house_description_contains: String
      company_house_description_not_contains: String
      company_house_description_starts_with: String
      company_house_description_not_starts_with: String
      company_house_description_ends_with: String
      company_house_description_not_ends_with: String
      business_description: String
      business_description_not: String
      business_description_in: [String!]
      business_description_not_in: [String!]
      business_description_lt: String
      business_description_lte: String
      business_description_gt: String
      business_description_gte: String
      business_description_contains: String
      business_description_not_contains: String
      business_description_starts_with: String
      business_description_not_starts_with: String
      business_description_ends_with: String
      business_description_not_ends_with: String
      customer_name: String
      customer_name_not: String
      customer_name_in: [String!]
      customer_name_not_in: [String!]
      customer_name_lt: String
      customer_name_lte: String
      customer_name_gt: String
      customer_name_gte: String
      customer_name_contains: String
      customer_name_not_contains: String
      customer_name_starts_with: String
      customer_name_not_starts_with: String
      customer_name_ends_with: String
      customer_name_not_ends_with: String
      customer_address: String
      customer_address_not: String
      customer_address_in: [String!]
      customer_address_not_in: [String!]
      customer_address_lt: String
      customer_address_lte: String
      customer_address_gt: String
      customer_address_gte: String
      customer_address_contains: String
      customer_address_not_contains: String
      customer_address_starts_with: String
      customer_address_not_starts_with: String
      customer_address_ends_with: String
      customer_address_not_ends_with: String
      customer_postcode: String
      customer_postcode_not: String
      customer_postcode_in: [String!]
      customer_postcode_not_in: [String!]
      customer_postcode_lt: String
      customer_postcode_lte: String
      customer_postcode_gt: String
      customer_postcode_gte: String
      customer_postcode_contains: String
      customer_postcode_not_contains: String
      customer_postcode_starts_with: String
      customer_postcode_not_starts_with: String
      customer_postcode_ends_with: String
      customer_postcode_not_ends_with: String
      AND: [CustomerWhereInput!]
      OR: [CustomerWhereInput!]
      NOT: [CustomerWhereInput!]
    }

    input CustomerWhereUniqueInput {
      id: ID
      customer_name: String
    }

    scalar DateTime

    scalar Long

    type Mutation {
      createCustomer(data: CustomerCreateInput!): Customer!
      updateCustomer(
        data: CustomerUpdateInput!
        where: CustomerWhereUniqueInput!
      ): Customer
      updateManyCustomers(
        data: CustomerUpdateManyMutationInput!
        where: CustomerWhereInput
      ): BatchPayload!
      upsertCustomer(
        where: CustomerWhereUniqueInput!
        create: CustomerCreateInput!
        update: CustomerUpdateInput!
      ): Customer!
      deleteCustomer(where: CustomerWhereUniqueInput!): Customer
      deleteManyCustomers(where: CustomerWhereInput): BatchPayload!
      createPolicy(data: PolicyCreateInput!): Policy!
      updatePolicy(
        data: PolicyUpdateInput!
        where: PolicyWhereUniqueInput!
      ): Policy
      updateManyPolicies(
        data: PolicyUpdateManyMutationInput!
        where: PolicyWhereInput
      ): BatchPayload!
      upsertPolicy(
        where: PolicyWhereUniqueInput!
        create: PolicyCreateInput!
        update: PolicyUpdateInput!
      ): Policy!
      deletePolicy(where: PolicyWhereUniqueInput!): Policy
      deleteManyPolicies(where: PolicyWhereInput): BatchPayload!
      createProduct(data: ProductCreateInput!): Product!
      updateProduct(
        data: ProductUpdateInput!
        where: ProductWhereUniqueInput!
      ): Product
      updateManyProducts(
        data: ProductUpdateManyMutationInput!
        where: ProductWhereInput
      ): BatchPayload!
      upsertProduct(
        where: ProductWhereUniqueInput!
        create: ProductCreateInput!
        update: ProductUpdateInput!
      ): Product!
      deleteProduct(where: ProductWhereUniqueInput!): Product
      deleteManyProducts(where: ProductWhereInput): BatchPayload!
      createUser(data: UserCreateInput!): User!
      updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
      updateManyUsers(
        data: UserUpdateManyMutationInput!
        where: UserWhereInput
      ): BatchPayload!
      upsertUser(
        where: UserWhereUniqueInput!
        create: UserCreateInput!
        update: UserUpdateInput!
      ): User!
      deleteUser(where: UserWhereUniqueInput!): User
      deleteManyUsers(where: UserWhereInput): BatchPayload!
    }

    enum MutationType {
      CREATED
      UPDATED
      DELETED
    }

    interface Node {
      id: ID!
    }

    type PageInfo {
      hasNextPage: Boolean!
      hasPreviousPage: Boolean!
      startCursor: String
      endCursor: String
    }

    type Policy {
      id: ID!
      customer: Customer!
      product: Product!
      policy_number: String!
      account_exec: String!
      account_handler: String!
      long_term_agreement: Boolean!
      premium_pennies: Int!
      renewal_date: DateTime!
      start_date: DateTime!
      createdAt: DateTime!
      updatedAt: DateTime!
    }

    type PolicyConnection {
      pageInfo: PageInfo!
      edges: [PolicyEdge]!
      aggregate: AggregatePolicy!
    }

    input PolicyCreateInput {
      customer: CustomerCreateOneInput!
      product: ProductCreateOneInput!
      policy_number: String!
      account_exec: String!
      account_handler: String!
      long_term_agreement: Boolean!
      premium_pennies: Int!
      renewal_date: DateTime!
      start_date: DateTime!
    }

    type PolicyEdge {
      node: Policy!
      cursor: String!
    }

    enum PolicyOrderByInput {
      id_ASC
      id_DESC
      policy_number_ASC
      policy_number_DESC
      account_exec_ASC
      account_exec_DESC
      account_handler_ASC
      account_handler_DESC
      long_term_agreement_ASC
      long_term_agreement_DESC
      premium_pennies_ASC
      premium_pennies_DESC
      renewal_date_ASC
      renewal_date_DESC
      start_date_ASC
      start_date_DESC
      createdAt_ASC
      createdAt_DESC
      updatedAt_ASC
      updatedAt_DESC
    }

    type PolicyPreviousValues {
      id: ID!
      policy_number: String!
      account_exec: String!
      account_handler: String!
      long_term_agreement: Boolean!
      premium_pennies: Int!
      renewal_date: DateTime!
      start_date: DateTime!
      createdAt: DateTime!
      updatedAt: DateTime!
    }

    type PolicySubscriptionPayload {
      mutation: MutationType!
      node: Policy
      updatedFields: [String!]
      previousValues: PolicyPreviousValues
    }

    input PolicySubscriptionWhereInput {
      mutation_in: [MutationType!]
      updatedFields_contains: String
      updatedFields_contains_every: [String!]
      updatedFields_contains_some: [String!]
      node: PolicyWhereInput
      AND: [PolicySubscriptionWhereInput!]
      OR: [PolicySubscriptionWhereInput!]
      NOT: [PolicySubscriptionWhereInput!]
    }

    input PolicyUpdateInput {
      customer: CustomerUpdateOneRequiredInput
      product: ProductUpdateOneRequiredInput
      policy_number: String
      account_exec: String
      account_handler: String
      long_term_agreement: Boolean
      premium_pennies: Int
      renewal_date: DateTime
      start_date: DateTime
    }

    input PolicyUpdateManyMutationInput {
      policy_number: String
      account_exec: String
      account_handler: String
      long_term_agreement: Boolean
      premium_pennies: Int
      renewal_date: DateTime
      start_date: DateTime
    }

    input PolicyWhereInput {
      id: ID
      id_not: ID
      id_in: [ID!]
      id_not_in: [ID!]
      id_lt: ID
      id_lte: ID
      id_gt: ID
      id_gte: ID
      id_contains: ID
      id_not_contains: ID
      id_starts_with: ID
      id_not_starts_with: ID
      id_ends_with: ID
      id_not_ends_with: ID
      customer: CustomerWhereInput
      product: ProductWhereInput
      policy_number: String
      policy_number_not: String
      policy_number_in: [String!]
      policy_number_not_in: [String!]
      policy_number_lt: String
      policy_number_lte: String
      policy_number_gt: String
      policy_number_gte: String
      policy_number_contains: String
      policy_number_not_contains: String
      policy_number_starts_with: String
      policy_number_not_starts_with: String
      policy_number_ends_with: String
      policy_number_not_ends_with: String
      account_exec: String
      account_exec_not: String
      account_exec_in: [String!]
      account_exec_not_in: [String!]
      account_exec_lt: String
      account_exec_lte: String
      account_exec_gt: String
      account_exec_gte: String
      account_exec_contains: String
      account_exec_not_contains: String
      account_exec_starts_with: String
      account_exec_not_starts_with: String
      account_exec_ends_with: String
      account_exec_not_ends_with: String
      account_handler: String
      account_handler_not: String
      account_handler_in: [String!]
      account_handler_not_in: [String!]
      account_handler_lt: String
      account_handler_lte: String
      account_handler_gt: String
      account_handler_gte: String
      account_handler_contains: String
      account_handler_not_contains: String
      account_handler_starts_with: String
      account_handler_not_starts_with: String
      account_handler_ends_with: String
      account_handler_not_ends_with: String
      long_term_agreement: Boolean
      long_term_agreement_not: Boolean
      premium_pennies: Int
      premium_pennies_not: Int
      premium_pennies_in: [Int!]
      premium_pennies_not_in: [Int!]
      premium_pennies_lt: Int
      premium_pennies_lte: Int
      premium_pennies_gt: Int
      premium_pennies_gte: Int
      renewal_date: DateTime
      renewal_date_not: DateTime
      renewal_date_in: [DateTime!]
      renewal_date_not_in: [DateTime!]
      renewal_date_lt: DateTime
      renewal_date_lte: DateTime
      renewal_date_gt: DateTime
      renewal_date_gte: DateTime
      start_date: DateTime
      start_date_not: DateTime
      start_date_in: [DateTime!]
      start_date_not_in: [DateTime!]
      start_date_lt: DateTime
      start_date_lte: DateTime
      start_date_gt: DateTime
      start_date_gte: DateTime
      createdAt: DateTime
      createdAt_not: DateTime
      createdAt_in: [DateTime!]
      createdAt_not_in: [DateTime!]
      createdAt_lt: DateTime
      createdAt_lte: DateTime
      createdAt_gt: DateTime
      createdAt_gte: DateTime
      updatedAt: DateTime
      updatedAt_not: DateTime
      updatedAt_in: [DateTime!]
      updatedAt_not_in: [DateTime!]
      updatedAt_lt: DateTime
      updatedAt_lte: DateTime
      updatedAt_gt: DateTime
      updatedAt_gte: DateTime
      AND: [PolicyWhereInput!]
      OR: [PolicyWhereInput!]
      NOT: [PolicyWhereInput!]
    }

    input PolicyWhereUniqueInput {
      id: ID
    }

    type Product {
      id: ID!
      createdAt: DateTime!
      updatedAt: DateTime!
      name: String!
    }

    type ProductConnection {
      pageInfo: PageInfo!
      edges: [ProductEdge]!
      aggregate: AggregateProduct!
    }

    input ProductCreateInput {
      name: String!
    }

    input ProductCreateOneInput {
      create: ProductCreateInput
      connect: ProductWhereUniqueInput
    }

    type ProductEdge {
      node: Product!
      cursor: String!
    }

    enum ProductOrderByInput {
      id_ASC
      id_DESC
      createdAt_ASC
      createdAt_DESC
      updatedAt_ASC
      updatedAt_DESC
      name_ASC
      name_DESC
    }

    type ProductPreviousValues {
      id: ID!
      createdAt: DateTime!
      updatedAt: DateTime!
      name: String!
    }

    type ProductSubscriptionPayload {
      mutation: MutationType!
      node: Product
      updatedFields: [String!]
      previousValues: ProductPreviousValues
    }

    input ProductSubscriptionWhereInput {
      mutation_in: [MutationType!]
      updatedFields_contains: String
      updatedFields_contains_every: [String!]
      updatedFields_contains_some: [String!]
      node: ProductWhereInput
      AND: [ProductSubscriptionWhereInput!]
      OR: [ProductSubscriptionWhereInput!]
      NOT: [ProductSubscriptionWhereInput!]
    }

    input ProductUpdateDataInput {
      name: String
    }

    input ProductUpdateInput {
      name: String
    }

    input ProductUpdateManyMutationInput {
      name: String
    }

    input ProductUpdateOneRequiredInput {
      create: ProductCreateInput
      update: ProductUpdateDataInput
      upsert: ProductUpsertNestedInput
      connect: ProductWhereUniqueInput
    }

    input ProductUpsertNestedInput {
      update: ProductUpdateDataInput!
      create: ProductCreateInput!
    }

    input ProductWhereInput {
      id: ID
      id_not: ID
      id_in: [ID!]
      id_not_in: [ID!]
      id_lt: ID
      id_lte: ID
      id_gt: ID
      id_gte: ID
      id_contains: ID
      id_not_contains: ID
      id_starts_with: ID
      id_not_starts_with: ID
      id_ends_with: ID
      id_not_ends_with: ID
      createdAt: DateTime
      createdAt_not: DateTime
      createdAt_in: [DateTime!]
      createdAt_not_in: [DateTime!]
      createdAt_lt: DateTime
      createdAt_lte: DateTime
      createdAt_gt: DateTime
      createdAt_gte: DateTime
      updatedAt: DateTime
      updatedAt_not: DateTime
      updatedAt_in: [DateTime!]
      updatedAt_not_in: [DateTime!]
      updatedAt_lt: DateTime
      updatedAt_lte: DateTime
      updatedAt_gt: DateTime
      updatedAt_gte: DateTime
      name: String
      name_not: String
      name_in: [String!]
      name_not_in: [String!]
      name_lt: String
      name_lte: String
      name_gt: String
      name_gte: String
      name_contains: String
      name_not_contains: String
      name_starts_with: String
      name_not_starts_with: String
      name_ends_with: String
      name_not_ends_with: String
      AND: [ProductWhereInput!]
      OR: [ProductWhereInput!]
      NOT: [ProductWhereInput!]
    }

    input ProductWhereUniqueInput {
      id: ID
      name: String
    }

    type Query {
      customer(where: CustomerWhereUniqueInput!): Customer
      customers(
        where: CustomerWhereInput
        orderBy: CustomerOrderByInput
        skip: Int
        after: String
        before: String
        first: Int
        last: Int
      ): [Customer]!
      customersConnection(
        where: CustomerWhereInput
        orderBy: CustomerOrderByInput
        skip: Int
        after: String
        before: String
        first: Int
        last: Int
      ): CustomerConnection!
      policy(where: PolicyWhereUniqueInput!): Policy
      policies(
        where: PolicyWhereInput
        orderBy: PolicyOrderByInput
        skip: Int
        after: String
        before: String
        first: Int
        last: Int
      ): [Policy]!
      policiesConnection(
        where: PolicyWhereInput
        orderBy: PolicyOrderByInput
        skip: Int
        after: String
        before: String
        first: Int
        last: Int
      ): PolicyConnection!
      product(where: ProductWhereUniqueInput!): Product
      products(
        where: ProductWhereInput
        orderBy: ProductOrderByInput
        skip: Int
        after: String
        before: String
        first: Int
        last: Int
      ): [Product]!
      productsConnection(
        where: ProductWhereInput
        orderBy: ProductOrderByInput
        skip: Int
        after: String
        before: String
        first: Int
        last: Int
      ): ProductConnection!
      user(where: UserWhereUniqueInput!): User
      users(
        where: UserWhereInput
        orderBy: UserOrderByInput
        skip: Int
        after: String
        before: String
        first: Int
        last: Int
      ): [User]!
      usersConnection(
        where: UserWhereInput
        orderBy: UserOrderByInput
        skip: Int
        after: String
        before: String
        first: Int
        last: Int
      ): UserConnection!
      node(id: ID!): Node
    }

    type Subscription {
      customer(
        where: CustomerSubscriptionWhereInput
      ): CustomerSubscriptionPayload
      policy(where: PolicySubscriptionWhereInput): PolicySubscriptionPayload
      product(where: ProductSubscriptionWhereInput): ProductSubscriptionPayload
      user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
    }

    type User {
      id: ID!
      name: String!
    }

    type UserConnection {
      pageInfo: PageInfo!
      edges: [UserEdge]!
      aggregate: AggregateUser!
    }

    input UserCreateInput {
      name: String!
    }

    type UserEdge {
      node: User!
      cursor: String!
    }

    enum UserOrderByInput {
      id_ASC
      id_DESC
      name_ASC
      name_DESC
      createdAt_ASC
      createdAt_DESC
      updatedAt_ASC
      updatedAt_DESC
    }

    type UserPreviousValues {
      id: ID!
      name: String!
    }

    type UserSubscriptionPayload {
      mutation: MutationType!
      node: User
      updatedFields: [String!]
      previousValues: UserPreviousValues
    }

    input UserSubscriptionWhereInput {
      mutation_in: [MutationType!]
      updatedFields_contains: String
      updatedFields_contains_every: [String!]
      updatedFields_contains_some: [String!]
      node: UserWhereInput
      AND: [UserSubscriptionWhereInput!]
      OR: [UserSubscriptionWhereInput!]
      NOT: [UserSubscriptionWhereInput!]
    }

    input UserUpdateInput {
      name: String
    }

    input UserUpdateManyMutationInput {
      name: String
    }

    input UserWhereInput {
      id: ID
      id_not: ID
      id_in: [ID!]
      id_not_in: [ID!]
      id_lt: ID
      id_lte: ID
      id_gt: ID
      id_gte: ID
      id_contains: ID
      id_not_contains: ID
      id_starts_with: ID
      id_not_starts_with: ID
      id_ends_with: ID
      id_not_ends_with: ID
      name: String
      name_not: String
      name_in: [String!]
      name_not_in: [String!]
      name_lt: String
      name_lte: String
      name_gt: String
      name_gte: String
      name_contains: String
      name_not_contains: String
      name_starts_with: String
      name_not_starts_with: String
      name_ends_with: String
      name_not_ends_with: String
      AND: [UserWhereInput!]
      OR: [UserWhereInput!]
      NOT: [UserWhereInput!]
    }

    input UserWhereUniqueInput {
      id: ID
    }
  `
}
