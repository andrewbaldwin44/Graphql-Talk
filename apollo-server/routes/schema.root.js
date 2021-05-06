const { gql } = require("apollo-server");

const QueryType = gql`
  type Query {
    helloWorld: String
    reverse(word: String!): String
  }
`;

module.exports = gql`
  ${QueryType}
`;
