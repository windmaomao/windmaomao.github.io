import firebase from './firebase';

const db = firebase.database();

const saveTrade = (trade) => {
  const { _meta, ...props} = trade;
  return db.ref(`Trade/${trade.name}`).set(props);
}

export default {
  saveTrade
};