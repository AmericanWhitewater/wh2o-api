import { pgClient, DataTypes } from "../config";
const TripLog = require("../models/triplog")(pgClient, DataTypes);

module.exports = (app) => {
  app.get("/trip-logs", (req, res) => {
    TripLog.findAll({
      where: {
        reachid: req.query.reachid
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

  app.post("/new-trip-log", (req, res) => {
    TripLog.create(req.body)
      .then(() => {
        res.send("TripLog Created").status(200);
      })
      .catch((err) => {
        console.log("err: ", err);
        res.send(err).status(500);
      });
  });

  app.put("/update-trip-log", (req, res) => {
    TripLog.update(req.body, {
      where: {
        id: req.query.id,
      },
    })
      .then(() => {
        res.send("TripLog updated").status(200);
      })
      .catch((err) => {
        console.log("err: ", err);
        res.send(err).status(500);
      });
  });

  app.delete("/delete-trip-log", (req, res) => {
    TripLog.destroy({
      where: {
        id: req.query.id,
      },
    })
      .then(() => {
        res.send("TripLog Deleted").status(200);
      })
      .catch((err) => {
        console.log("err: ", err);
        res.send(err).send(500);
      });
  });
};
