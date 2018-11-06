import firebase from 'firebase/app';
import 'firebase/app';
import config from './.firebase';
firebase.initializeApp(config);

export default firebase;