import firebase from 'firebase';
const config = {
    apiKey: "AIzaSyALng8pwz3IN4ifuhIqye2wV6j3oUApLcQ",
    authDomain: "casmara-a29b3.firebaseapp.com",
    databaseURL: "https://casmara-a29b3.firebaseio.com",
    projectId: "casmara-a29b3",
    storageBucket: "casmara-a29b3.appspot.com",
    messagingSenderId: "66037646460"
  };
  const fire=firebase.initializeApp(config);
  export default fire;