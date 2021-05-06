const q = require("faunadb").query;
const FaunaClient = require("../../config/fauna.config");

async function getUsers() {
  try {
    const { data: users } = await FaunaClient.query(
      q.Map(
        q.Paginate(q.Documents(q.Collection("Users"))),
        q.Lambda("X", q.Get(q.Var("X")))
      )
    );

    return {
      status: 200,
      message: "Success",
      users: users.map(({ data }) => data)
    };
  } catch ({ description: messsage }) {
    return {
      status: 404,
      message
    };
  }
}

module.exports = {
  getUsers
};
