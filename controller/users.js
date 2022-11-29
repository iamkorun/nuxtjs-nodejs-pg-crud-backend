const client = require("../config/dbconfig");

module.exports = {
  getAllUser: async (req, res) => {
    try {
      const sql = "select * from users";
      const result = await client.query(sql);
      res.send(result.rows);
    } catch (err) {
      res.send(err.stack);
    }
  },
  getUserById: async (req, res) => {
    try {
      const _id = req.params.id;
      const sql = "select firstname,lastname,roleid from users where id = $1";
      const result = await client.query(sql, [_id]);
      res.send(result.rows);
    } catch (err) {
      res.send(err.stack);
    }
  },
  addUser: async (req, res) => {
    try {
      const { firstname, lastname, roleid } = req.body;
      const sql =
        "insert into users(firstname,lastname,roleid) values($1,$2,$3) RETURNING *";
      const values = [firstname, lastname, roleid];
      const result = await client.query(sql, values);
      res.send(result);
    } catch (err) {
      res.send(err.stack);
      //   console.log(err.stack);
    }
  },
  updateUserById: async (req, res) => {
    try {
      const _id = req.params.id;
      const { firstname, lastname, roleid } = req.body;
      const sql =
        "update users set firstname = $1, lastname = $2, roleid = $3 where id = $4 RETURNING *";
      const values = [firstname, lastname, roleid, _id];
      const result = await client.query(sql, values);
      res.send(result);
    } catch (err) {
      res.send(err.stack);
      // console.log(err.stack);
    }
  },
  deleteUser: async (req, res) => {
    try {
      const _id = req.params.id;
      const sql = "DELETE FROM users WHERE id = $1";
      const values = [_id];
      const result = await client.query(sql, values);
      res.send(result);
    } catch (err) {
      res.send(err.stack);
    }
  },
};
