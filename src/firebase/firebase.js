import * as firebase from 'firebase';
import { DH_UNABLE_TO_CHECK_GENERATOR } from 'constants';

// Initialize Firebase
const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// //child removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// //child changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// //child added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });


// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses);
// });


// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses);
    
// });

// database.ref('expenses').push({
//     description: 'Rent',
//     amount: 123456,
//     note: 'Paid in full',
//     createdAt: 123342425
// });

// database.ref('notes/-LCqikb6Dxp07fbjGF_F').remove();

// database.ref('notes').push({
//     title: 'Course Topics',
//     body: "React Native"
// });

// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// });

// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// });

// setTimeout(() => {
//     database.ref('age').set(35);
// }, 3500);

// setTimeout(() => {
//     database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//     database.ref('age').set(25);
// }, 10500);

// database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);

//     })
//     .catch((e) => {
//         console.log('Fetching data error: ', e);
        
// })

// database.ref().set({
//     name: 'Pericles',
//     age: 42,
//     stressLevel: 6,
//     job: {
//         title: 'Software Developer',
//         company: 'Google'
//     },
//     location: {
//         city: 'Los Angeles',
//         country: 'USA'
//     }
// }).then(() => {
//     console.log('Data is saved');
// }).catch((error) => {
//     console.log('Error: ', error);
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// });

//if using database.ref() it deletes everything.
// database.ref('isSingle')
//     .remove()
//     .then(() => {
//         console.log('Data was removed')
//     })
//     .catch((e) => {
//         console.log('RemoveError: ', e);
//     });