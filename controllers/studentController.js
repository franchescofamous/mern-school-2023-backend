const dataBase = require("../config/mysql.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
exports.signup = (req, res) => {
  bcrypt
    .hash(req.body.password, 10)
    .then((hash) => {
      let InsertStudentQuery =
        "INSERT INTO etudiant (nom_etudiant,prenom_etudiant, email_etudiant, password_etudiant) VALUES(?,?,?,?) ";
      dataBase.query(
        InsertStudentQuery,
        [req.body.name, req.body.surname, req.body.email, hash],
        (error, result) => {
          if (error) {
            res.status(500).json("Probleme serveur ");
          }
          res.status(201).json("Les données ont été inserer");
        }
      );
    })
    .catch((error) => {
      res.status(500).json(error);
    });
  /* console.log(req.body);
  res.json({ message: "alooo signup" }); */
};
exports.login = (req, res) => {
  console.log(req.body);
  let verifyInTable = "SELECT * FROM etudiant WHERE email_etudiant=?";
  dataBase.query(verifyInTable, [req.body.email], (error, result) => {
    if (error) {
      res.status(500).json(error);
    }
    if (result.length > 0) {
      bcrypt
        .compare(req.body.password, result[0].password_etudiant)
        .then((valid) => {
          if (valid) {
            let accessToken = jwt.sign(
              { etudiant_id: result[0].id_etudiant },
              "famous",
              { expiresIn: "1h" }
            );
            res.status(201).json(accessToken);
          } else {
            res.status(401).json("password is incorrect");
          }
        });
    } else {
      res.status(401).json("user not found");
    }
  });
};
