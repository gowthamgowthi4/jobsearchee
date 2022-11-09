import express from "express";
import cors from "cors";
import db from "./db.js";
import { loginCompany, loginUser } from "./controllers/function.js";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/loginuser", loginUser);
app.post("/logincompany", loginCompany);

app.post("/registeruser", (req, res) => {
  const q = "INSERT INTO user(email, password) VALUES(?);";
  const input = [req.body.email, req.body.password];
  db.query(q, [input], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json("Value inserted successfully");
  });
});

app.post("/registercompany", (req, res) => {
  const q = "INSERT INTO company(email, password, turnover) VALUES(?);";
  const input = [req.body.email, req.body.password, req.body.turnover];
  db.query(q, [input], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json("Value inserted successfully");
  });
});

app.post("/hiringform", (req, res) => {
  const q = "INSERT INTO hiring(companyname, jobdescription) VALUES(?);";
  const input = [req.body.companyname, req.body.jobdescription];
  db.query(q, [input], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json("Started the hiring process successfully");
  });
});

app.post("/applyform", (req, res) => {
  const q = "INSERT INTO apply(empname, qualification, skills, contact, mail) VALUES(?);";
  const input = [req.body.empname, req.body.qualification, req.body.skills, req.body.contact, req.body.mail];
  db.query(q, [input], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json("Applied for the job successfully");
  });
});













app.listen(3001, (req, res) => {
  console.log("Listening on PORT 3001...");
});

// app.post("/create", (req, res) => {
//   const q =
//     "CREATE TABLE user(id int PRIMARY KEY AUTO_INCREMENT, email varchar(50) NOT NULL, password varchar(255) NOT NULL);";
//   db.query(q, (err, data) => {
//     if (err) return res.status(500).json(err);
//     return res.status(200).json("Table Created successfully");
//   });
// });

// app.post("/create1", (req, res) => {
//   const q =
//     "CREATE TABLE company(id int PRIMARY KEY AUTO_INCREMENT, email varchar(50) NOT NULL, password varchar(255) NOT NULL, turnover int);";
//   db.query(q, (err, data) => {
//     if (err) return res.status(500).json(err);
//     return res.status(200).json("Table Created successfully");
//   });
// });
