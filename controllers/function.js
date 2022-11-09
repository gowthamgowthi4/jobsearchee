import db from "../db.js";

export const loginCompany = (req, res) => {
  const q = "SELECT * FROM company where email = ?";
  try {
    db.query(q, [req.body.email], (err, data) => {
      if (err) return res.status(500).json(err);
      if (data.length == 0) return res.status(404).json("User does not exist!");
      if (req.body.password === data[0].password)
        return res.status(200).json("Login Successful");
      else return res.status(400).json("Wrong username or password!");
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

export const loginUser = (req, res) => {
  const q = "SELECT * FROM user where email = ?";
  try {
    db.query(q, [req.body.email], (err, data) => {
      if (err) return res.status(500).json(err);
      if (data.length == 0) return res.status(404).json("User does not exist!");
      if (req.body.password === data[0].password)
        return res.status(200).json("Login Successful");
      else return res.status(400).json("Wrong username or password!");
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

export const logout = (req, res) => {
  console.log("Logout");
};
