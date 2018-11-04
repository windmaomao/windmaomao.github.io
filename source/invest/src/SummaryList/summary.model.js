const getDefaultSummary = () => ({
  tradeId: 'TSLA',
  name: 'Tesla',
  shares: 23,
  cost: 7035.0,
  gain: 234.0,
});

const summaries = [
  { name: 'ADSK', shares: -13, cost: -1743.69 },
  { name: 'ALNY', shares: -8, cost: -706.08 },
  { name: 'BC', shares: -8, cost: -426.24 },
  { name: 'BFAM', shares: -8, cost: -927.44 },
  { name: 'BKS', shares: -80, cost: -536.00 },
  { name: 'BLUE', shares: -6, cost: -796.14 },
  { name: 'DTYS', shares: 130, cost: 3264.91 },
  { name: 'EUM', shares: 130, cost: 2602.60 },
  { name: 'CHAD', shares: 100, cost: 3706.00 },
  { name: 'EFZ', shares: 25, cost: 692.75 },
  { name: 'SH', shares: 40, cost: 1166.40 },
]

export {
  getDefaultSummary,
  summaries,
}

