const router = require("express").Router();
const sortSplits = require("../middlewares/pre-split.middleware");
const splitMiddleware = require("../middlewares/split.middleware");
const splitController = require("../controllers/split.controller");

router.post(
  "/compute",
  sortSplits,
  ...["FLAT",
  "PERCENTAGE",
  "RATIO"].map(
    (method => splitMiddleware(method))
  ),
  splitController
);

module.exports = router;
