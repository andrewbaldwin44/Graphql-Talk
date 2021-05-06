const q = require("faunadb").query;
const FaunaClient = require("../../config/fauna.config");

async function addUser(_, { user }) {
  try {
    const { data: addedUser } = await FaunaClient.query(
      q.Create(q.Collection("Users"), {
        data: user
      })
    );

    return {
      status: 201,
      message: "Success",
      user: addedUser
    };
  } catch ({ description: messsage }) {
    return {
      status: 401,
      message
    };
  }
}

module.exports = {
  addUser
};
