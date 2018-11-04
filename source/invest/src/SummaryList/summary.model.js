const getDefaultSummary = () => ({
  tradeId: 'TSLA',
  name: 'Tesla',
  shares: 23,
  cost: 7035.0,
  gain: 234.0,
});

const summaries = [
  { name: 'ADSK', quantity: -13, cost: -1743.69 },
  { name: 'ALNY', quantity: -8, cost: -706.08 },
  { name: 'BC', quantity: -8, cost: -426.24 },
  { name: 'BFAM', quantity: -8, cost: -927.44 },
  { name: 'BKS', quantity: -80, cost: -536.00 },
  { name: 'BLUE', quantity: -6, cost: -796.14 },
  { name: 'DTYS', quantity: 130, cost: 3264.91 },
  { name: 'EUM', quantity: 130, cost: 2602.60 },
  { name: 'CHAD', quantity: 100, cost: 3706.00 },
  { name: 'EFZ', quantity: 25, cost: 692.75 },
  { name: 'SH', quantity: 40, cost: 1166.40 },
]

export {
  getDefaultSummary,
  summaries,
}

