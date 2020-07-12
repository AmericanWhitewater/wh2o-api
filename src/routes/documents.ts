import { pgClient, DataTypes } from "../config";
const Document = require("../models/documents")(pgClient, DataTypes);

module.exports = (app) => {
  app.get("/document", (req, res) => {
    Document.findOne({
      where: {
        documentid: req.query.documentid
      }
    })
      .then((result) => {
        res.send(result).status(200);
      })
      .catch((err) => {
        console.log(err);
        res.send(err).status(404);
      });
  });

  app.post("/new-document", (req, res) => {
    Document.create(req.body)
      .then(() => {
        res.send("Document Created").status(200);
      })
      .catch((err) => {
        console.log("err: ", err);
        res.send(err).status(500);
      });
  });

  app.put("/update-document", (req, res) => {
    Document.update(req.body, {
      where: {
        documentid: req.query.documentid,
      },
    })
      .then(() => {
        res.send("Document updated").status(200);
      })
      .catch((err) => {
        console.log("err: ", err);
        res.send(err).status(500);
      });
  });

  app.delete("/delete-document", (req, res) => {
    Document.destroy({
      where: {
        documentid: req.query.documentid,
      },
    })
      .then(() => {
        res.send("Document Deleted").status(200);
      })
      .catch((err) => {
        console.log("err: ", err);
        res.send(err).send(500);
      });
  });
};
