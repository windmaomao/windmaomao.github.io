import fb from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyD_6NUanoEgY8S_aA_FxJRyESrEzkUgUk4",
  authDomain: "torrid-heat-2030.firebaseapp.com",
  databaseURL: "https://torrid-heat-2030.firebaseio.com",
  projectId: "torrid-heat-2030",
  storageBucket: "torrid-heat-2030.appspot.com",
  messagingSenderId: "829342570880"
};
fb.initializeApp(config);

export default fb;