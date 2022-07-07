const sortpay = (req, res, next) => {
  req.body.SpliInfo.sort((a, b) => a.SplitType.localeCompare(b.SplitType));
  return next();
};

const sortSplits = (req, res, next) => {
  req.splitData = { PERCENTAGE: [], RATIO: [], FLAT: [] };
  res.SplitBreakdown = [];
  req.totalRatio = 0;
  for (let record of req.body.SplitInfo) {
    const { SplitType, SplitValue } = record;
    req.splitData[SplitType].push(record);
    if (SplitType === "RATIO") {
      req.totalRatio += SplitValue;
    }
  }
  return next();
};

module.exports = sortSplits;
