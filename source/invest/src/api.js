import firebase from './firebase';

const db = firebase.database();

const saveTrade = (trade) => {
  const { _meta, ...props} = trade;
  return db.ref(`Trade/${trade.symbol}`).set(props);
}

const loadTrade = (id) => {
  return db.ref(`Trade/${id}`).once('value').then(res => res.val());
} 

const loadTradeList = () => {
  return db.ref('Trade/keys').once('value').then(res => res.val());
}

export default {
  loadTradeList,
  saveTrade,
  loadTrade,
};