const { ApolloServer, gql } = require('apollo-server');

// import
const resolvers = require('./resolvers')
const typeDefs = require('./schema/schema')


const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
