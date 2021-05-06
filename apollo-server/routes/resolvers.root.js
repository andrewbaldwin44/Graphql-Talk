const QueryResolvers = {
  helloWorld: () => "Hello World",
  reverse: (_, { word }) =>
    word
      .split("")
      .reverse()
      .join("")
};

module.exports = {
  Query: QueryResolvers
};
