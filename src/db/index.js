// Marcelo
import firebase from 'firebase/app'
import 'firebase/database'

// Contiene los datos de la conexión y el servicio
const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyBzGqlMw965ZYURXT_ZESl1cNRmmzcpPXI',
  authDomain: 'taller-407d5.firebaseapp.com',
  databaseURL: 'https://taller-407d5.firebaseio.com',
  projectId: 'taller-407d5',
  storageBucket: 'taller-407d5.appspot.com',
  messagingSenderId: '183891849723'
})

export const db = firebaseApp.database()
