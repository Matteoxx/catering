import {Navigation} from 'react-native-navigation';
import {registerScreens} from './src/screens';

import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDE3i6DFAui6XoTwJyYSbscFkF-Mrx9RIE",
  authDomain: "catering-964a8.firebaseapp.com",
  databaseURL: "https://catering-964a8.firebaseio.com",
  projectId: "catering-964a8",
  storageBucket: "",
  messagingSenderId: "620100157040",
  appId: "1:620100157040:web:7754bd0b90ca7177"
};

firebase.initializeApp(firebaseConfig);

registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: 'Initializing'
      }
    },
  });
});