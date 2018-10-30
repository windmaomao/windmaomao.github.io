import {Form} from 'mobx-react-form';

const fields = [
  'symbol',
  'name',
  'type',
  'price'
];

const values = {
  'symbol': 'TSLA',
  'name': 'Tesla',
}

export {
  fields, values,
};

class TradeForm extends Form {
  setup() {
    return {
      fields, values
    }
  }
}

export default TradeForm;



