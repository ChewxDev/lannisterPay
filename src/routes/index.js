const router = require("express").Router();

router.use("/split-payments", require("./split.route"));

module.exports = router;
