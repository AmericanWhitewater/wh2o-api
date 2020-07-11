import { pgClient, DataTypes } from "../config";
const GageReadingMetric = require("../models/gauge_reading_metrics")(pgClient, DataTypes);

module.exports = (app) => {
  app.get("/gage-reading-metrics", (req, res) => {
    GageReadingMetric.findAll()
      .then((result) => {
        res.send(result).status(200);
      })
      .catch((err) => {
        console.log(err);
        res.send(err).status(404);
      });
  });

  app.post("/new-gage-reading-metric", (req, res) => {
    GageReadingMetric.create(req.body)
      .then(() => {
        res.send("Gage update Created").status(200);
      })
      .catch((err) => {
        console.log("err: ", err);
        res.send(err).status(500);
      });
  });

  app.put("/update-gage-reading-metric", (req, res) => {
    GageReadingMetric.update(req.body, {
      where: {
        id: req.query.id,
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

  app.delete("/delete-gage-reading-metric", (req, res) => {
    GageReadingMetric.destroy({
      where: {
        id: req.query.id,
      },
    })
      .then(() => {
        res.send("GageReadingMetric Deleted").status(200);
      })
      .catch((err) => {
        console.log("err: ", err);
        res.send(err).send(500);
      });
  });
};
