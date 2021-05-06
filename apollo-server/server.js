const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema/schema.root");
const resolvers = require("./routes/resolvers.root");

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
