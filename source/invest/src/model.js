const Summary = {
  shares: 0,
  unitCost: '24.03',
  totalCost: '7035.00',
  unitValue: '22',
  totalGain: '234.00',
};

const Transaction = {
  quantity: '1',
  account: 'fidelity-personal',
  type: 'male',
  action: 'buy',
  price: '23.45',
  fee: '5.00',
  date: '1978-12-22',
  time: '',
  summary: Summary
};

const Trade = {
  _meta: { enabled: true, selected: false },
  symbol: '',
  name: '',
  type: '',
  url: '',
  price: '1.00',
  transactions: [],
  summary: Summary
};

const TransactionActionOptions = [
  { key: 'buy', text: 'Buy', value: 'buy' },
  { key: 'sell', text: 'Sell', value: 'sell' },
  { key: 'short', text: 'Short', value: 'short' },
  { key: 'cover', text: 'Cover', value: 'cover' },
];

export {
  Trade,
  Transaction,
  TransactionActionOptions,
}

