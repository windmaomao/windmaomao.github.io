const Summary = {
  unitCost: '24.03',
  totalCost: '7035.00',
  unitValue: '22',
  totalGain: '234.00',
};

const Transaction = {
  quantity: '1',
  account: 'fidelity-personal',
  type: 'Long',
  action: 'Bought',
  price: '23.45',
  fee: '5.00',
  date: '1978-12-22',
  time: '',
  summary: Summary
};

const Trade = {
  name: 'Tesla',
  symbol: 'TSLA',
  type: 'stock',
  url: 'http://google.com',
  price: '20.00',
  transactions: [Transaction],
  summary: Summary
};


export {
  Trade,
  Transaction
}

