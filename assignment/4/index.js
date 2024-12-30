
function calculateTax(income) {
  const taxRates = {
    low: { rate: 0.10, max: 10000 },
    medium: { rate: 0.20, max: 50000 },
    high: { rate: 0.30, max: Infinity }
  };

  return Object.keys(taxRates).reduce((totalTax, rateType) => {
    const rate = taxRates;
    const taxableAmount = Math.min(income, rate.max);
    return totalTax + (taxableAmount * rate.rate);
  }, 0);
}

console.log(calculateTax(5000));  // Output: 500
