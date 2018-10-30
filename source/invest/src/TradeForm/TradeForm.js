import {Form} from 'mobx-react-form';
import validatorjs from 'validatorjs';

const fields = [
  'symbol',
  'name',
  'type',
  'price',
  'transactions[].quantity'
];

const values = {
  'symbol': 'TSLA',
  'name': 'Tesla',
  'transactions': [
    {
      'quantity': 1,
    }
  ]
}

const rules = {
  'symbol': 'required',
  'transactions[].quantity': 'required|numeric|min:1'
}

const plugins = {
  dvr: validatorjs
};

export {
  fields, values, rules, plugins
};

class TradeForm extends Form {
  plugins() { return plugins; }
  setup() {
    return { fields, values, rules }
  }
}

export default TradeForm;



