const split = async (req, res, next) => {
  const result = {
    ID: req.body.ID,
    Balance: req.body.Amount,
    SplitBreakdown: res.SplitBreakdown,
  };
  res.status(200).json(result);
};

module.exports = split;
