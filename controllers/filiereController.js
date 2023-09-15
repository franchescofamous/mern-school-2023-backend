const dataBase = require("../config/mysql");
exports.getAllFiliere = (req, res) => {
  dataBase.query("SELECT * FROM filiere;", (error, result) => {
    if (error) {
      throw error;
    }
    res.status(200).json({ filiereListe: result });
  });
};

exports.getSpecificFiliere = (req, res) => {
  let selectFiliereJoinQuery =
    " SELECT * FROM filiere JOIN cours ON filiere.id_filiere =cours.id_filiere WHERE filiere.id_filiere=?";
  console.log(req.body.idFiliere);
  dataBase.query(
    selectFiliereJoinQuery,
    [req.body.idFiliere],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.status(200).json({ coursList: result });
    }
  );
};
exports.addFiliere = (req, res) => {
  let InsertFiliereQuery =
    "INSERT INTO filiere(nom_filiere,description_filiere) values(?,?)";
  // console.log();
  dataBase.query(
    InsertFiliereQuery,
    [req.body.filiere, req.body.description],
    (error, result) => {
      if (error) {
        res.status(400).json(error);
      }
      res.status(201).json("success");
    }
  );
};
