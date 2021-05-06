const { gql } = require("apollo-server");

module.exports = gql`
  type Mutation {
    addUser(user: AddUserInput!): AddUserResponse
  }
`;
