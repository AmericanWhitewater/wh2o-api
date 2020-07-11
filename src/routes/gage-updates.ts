import { pgClient, DataTypes } from "../config";
const GageUpdate = require("../models/gauge_updates")(pgClient, DataTypes);

module.exports = (app) => {
  app.get("/gage-updates", (req, res) => {
    GageUpdate.findAll({
      where: {
        gauge_id: req.query.gauge_id,
      },
    })
      .then((result) => {
        res.send(result).status(200);
      })
      .catch((err) => {
        console.log(err);
        res.send(err).status(404);
      });
  });

  app.post("/new-gage-update", (req, res) => {
    GageUpdate.create(req.body)
      .then(() => {
        res.send("Gage update Created").status(200);
      })
      .catch((err) => {
        console.log("err: ", err);
        res.send(err).status(500);
      });
  });

  app.put("/update-gage-update", (req, res) => {
    GageUpdate.update(req.body, {
      where: {
        gauge_id: req.query.gauge_id,
      },
    })
      .then(() => {
        res.send("Gage Update record successfully updated").status(200);
      })
      .catch((err) => {
        console.log("err: ", err);
        res.send(err).status(500);
      });
  });

  app.delete("/delete-gage-update", (req, res) => {
    GageUpdate.destroy({
      where: {
        gauge_id: req.query.gauge_id,
      },
    })
      .then(() => {
        res.send("GageUpdate Deleted").status(200);
      })
      .catch((err) => {
        console.log("err: ", err);
        res.send(err).send(500);
      });
  });
};
