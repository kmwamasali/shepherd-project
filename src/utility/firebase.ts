import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import config from '../config/firebase';

firebase.initializeApp(config);

export default firebase;