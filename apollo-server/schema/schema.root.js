const { gql } = require("apollo-server");
const QueryType = require("./query.type");
const MutationType = require("./mutation.type");
const UsersSchema = require("../routes/users/users.schema");

const ResponseType = gql`
  interface Response {
    status: Int!
    message: String!
  }
`;

module.exports = gql`
  ${QueryType}
  ${MutationType}
  ${ResponseType}
  ${UsersSchema}
`;
