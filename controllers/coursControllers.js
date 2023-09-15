const dataBase = require("../config/mysql");

exports.addCours = (req, res) => {
  console.log(req.body);
  let insertCoursQuery =
    "INSERT INTO cours (id_filiere,description_cours,nom_cours) Values(?,?,?)";
  dataBase.query(
    insertCoursQuery,
    [req.body.data.filiere, req.body.data.description, req.body.data.cours],
    (error, result) => {
      if (error) {
        res.status(400).json(error);
      }

      res.status(201).json("added");
    }
  );
};

exports.selectOneCours = (req, res) => {
  let selectOneCoursQuery = "select * from cours where id_cours=?";
  dataBase.query(selectOneCoursQuery, [req.params.id], (error, result) => {
    if (error) {
      res.status(400).json(error);
    }
    res.status(201).json(result);
  });
  console.log(req.params.id);
};
