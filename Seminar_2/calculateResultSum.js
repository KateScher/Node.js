const np = require("number-precision");

function calculateResultSum(purchases, discount) {
  let total = purchases.reduce((acc, purchase) => np.plus(acc + purchase), 0);
  return np.times(total, discount);
}

module.exports = { calculateResultSum };
