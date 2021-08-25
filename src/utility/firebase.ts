import firebase from 'firebase/app';
import 'firebase/database';

import config from '../config/firebase.js';

firebase.initializeApp(config);

export default firebase.database();