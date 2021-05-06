const { gql } = require("apollo-server");

const UserType = gql`
  type User {
    email: String!
    name: String!
  }
`;

const GetUsersResponse = gql`
  type GetUsersResponse implements Response {
    users: [User]
    status: Int!
    message: String!
  }
`;

const AddUserResponse = gql`
  type AddUserResponse implements Response {
    user: User
    status: Int!
    message: String!
  }
`;

const AddUserInput = gql`
  input AddUserInput {
    email: String!
    name: String!
  }
`;

module.exports = gql`
  ${UserType}
  ${GetUsersResponse}
  ${AddUserResponse}
  ${AddUserInput}
`;
