const UsersQuery = require("./users/users.query");
const UsersMutation = require("./users/users.mutation");

module.exports = {
  Query: {
    ...UsersQuery
  },
  Mutation: {
    ...UsersMutation
  }
};
