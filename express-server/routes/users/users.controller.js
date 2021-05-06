const q = require("faunadb").query;
const FaunaClient = require("../../config/fauna.config");

async function getUsers(_, res) {
  try {
    const { data: users } = await FaunaClient.query(
      q.Map(
        q.Paginate(q.Documents(q.Collection("Users"))),
        q.Lambda("X", q.Get(q.Var("X")))
      )
    );

    res.json({
      status: 200,
      message: "Success",
      users: users.map(({ data }) => data)
    });
  } catch ({ messsage }) {
    res.status(404).json({
      status: 404,
      message
    });
  }
}

async function addUser(req, res) {
  try {
    const { data: addedUser } = await FaunaClient.query(
      q.Create(q.Collection("Users"), {
        data: {
          name: req.params.user,
          email: req.body.email
        }
      })
    );

    res.status(201).json({
      status: 201,
      message: "Success",
      user: addedUser
    });
  } catch ({ description: messsage }) {
    res.status(401).json({
      status: 401,
      message
    });
  }
}

module.exports = {
  getUsers,
  addUser
};
