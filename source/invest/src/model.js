const Summary = {
  unitCost: '24.03',
  totalCost: '7035.00',
  unitValue: '22',
  totalGain: '234.00',
}

const Transaction = {
  quantity: '30',
  account: 'fidelity-personal',
  type: 'long',
  price: '23.45',
  fee: '5.00',
  total: '7035.0',
  date: '1978-12-22',
  time: '',
  summary: Summary
}

const Trade = {
  name: 'TSLA',
  type: 'stock',
  transactions: [Transaction],
  summary: {
  }
}

export {
  Summary,
  Transaction,
  Trade,
}
