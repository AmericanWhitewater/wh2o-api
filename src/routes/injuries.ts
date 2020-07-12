import { pgClient, DataTypes } from "../config";
const Injury = require("../models/injuries")(pgClient, DataTypes);

module.exports = (app) => {
  app.get("/injuries", (req, res) => {
    Injury.findAll()
      .then((result) => {
        res.send(result).status(200);
      })
      .catch((err) => {
        console.log(err);
        res.send(err).status(404);
      });
  });

  app.post("/new-injury", (req, res) => {
    Injury.create(req.body)
      .then(() => {
        res.send("Injury Created").status(200);
      })
      .catch((err) => {
        console.log("err: ", err);
        res.send(err).status(500);
      });
  });

  app.put("/update-injury", (req, res) => {
    Injury.update(req.body, {
      where: {
        id: req.query.id,
      },
    })
      .then(() => {
        res.send("Injury updated").status(200);
      })
      .catch((err) => {
        console.log("err: ", err);
        res.send(err).status(500);
      });
  });

  app.delete("/delete-injury", (req, res) => {
    Injury.destroy({
      where: {
        id: req.query.id,
      },
    })
      .then(() => {
        res.send("Injury Deleted").status(200);
      })
      .catch((err) => {
        console.log("err: ", err);
        res.send(err).send(500);
      });
  });
};
