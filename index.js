const express = require("express");
const cors = require("cors");
const filiereRoute = require("./routes/filiereRoute");
const studentRoute = require("./routes/studentRoute");
const coursRoute = require("./routes/coursRoute");
const app = express();

/* app.use((req, res) => {
  res.end(JSON.stringify([{ nom: "val", prenom: "gisele" }]));
}); */
app.use(cors());
app.use(express.json());

app.use("/filiere", filiereRoute);
app.use("/student", studentRoute);
app.use("/cours", coursRoute);
app.listen(process.env.PORT || 5000);

/* const http = require("http");
const server = http.createServer((req, res) => {
  res.end("bonjour je suis le serveur node");
});
server.listen(5000); */
