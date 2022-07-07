const splitMethods = {
  FLAT: (value, balance) => {
    return [value, balance - value];
  },
  PERCENTAGE: (value, balance) => {
    const amount = (value / 100) * balance;
    return [amount, balance - amount];
  },
  RATIO: (value, balance, totalRatio) => {
    const amount = (value / totalRatio) * balance;
    return [amount, balance];
  },
};

function splitpay(method) {
  // console.log(method)
  return (req, res, next) => {
    const splitMethod = splitMethods[method];
    const records = req.splitData[method];

    for (let record of records) {
      const { SplitValue, SplitEntityId } = record;
      const [Amount, balance] = splitMethod(
        SplitValue,
        req.body.Amount,
        req.totalRatio
      );
      req.body.Amount = balance;

      res.SplitBreakdown.push({ Amount, SplitEntityId });
    }

    if (method === "RATIO" && req.splitData[method].length ) {
      req.body.Amount = 0;
    }
    next();
  };
}

module.exports = splitpay;
