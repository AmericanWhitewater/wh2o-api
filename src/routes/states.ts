import { pgClient, DataTypes } from "../config";
const State = require("../models/states")(pgClient, DataTypes);

module.exports = (app) => {
  app.get("/states", (req, res) => {
    State.findAll()
      .then((result) => {

        /**
         * @todo adjust to return name, abbreviation, and country.
         */
        const data = result.map((factor) => factor.dataValues.name.trim());

        res.send(data).status(200);
      })
      .catch((err) => {
        console.log(err);
        res.send(err).status(404);
      });
  });

  app.post("/new-state", (req, res) => {
    State.create(req.body)
      .then(() => {
        res.send("State Created").status(200);
      })
      .catch((err) => {
        console.log("err: ", err);
        res.send(err).status(500);
      });
  });

  app.put("/update-state", (req, res) => {
    State.update(req.body, {
      where: {
        record_number: req.query.record_number,
      },
    })
      .then(() => {
        res.send("State updated").status(200);
      })
      .catch((err) => {
        console.log("err: ", err);
        res.send(err).status(500);
      });
  });

  app.delete("/delete-state", (req, res) => {
    State.destroy({
      where: {
        record_number: req.query.record_number,
      },
    })
      .then(() => {
        res.send("State Deleted").status(200);
      })
      .catch((err) => {
        console.log("err: ", err);
        res.send(err).send(500);
      });
  });
};
