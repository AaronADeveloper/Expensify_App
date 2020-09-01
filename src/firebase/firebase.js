import * as firebase from "firebase";

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, database, googleAuthProvider as default };

// database.ref("expenses").on("child_removed", (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database
//   .ref("expenses")
//   .once("value")
//   .then((snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val(),
//       });
//     });

//     console.log(expenses);
//   });

// database.ref("expenses").on("value", (snapshot) => {
//   const expenses = [];

//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val(),
//     });
//   });

//   console.log(expenses);
// });

// database.ref("expenses").push({
//   description: "First expense",
//   note: "first note",
//   amount: 10000,
//   createdAt: 1000,
// });

// database.ref("notes" / -MFvOcIhgpiBK0BMwKvZ).update({
//   body: "get food",
// });

// database.ref("notes").push({
//   title: "Course topics",
//   body: "React native, angular, pyhton",
// });

//creates a new property on the ref
//
//
//
//
//
//
//
//
//
//

//-------------------------------------------------------------------------------------------------------------------------------------
//
// database.ref().on("value", (snapshot) => {
//   console.log(snapshot.val());
// });

// database
//   .ref()
//   .once("value")
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log("Error fetching data", e);
//   });

// database
//   .ref()
//   .set({
//     name: "Aaron A",
//     age: 24,
//     stressLevel: 6,
//     job: {
//       title: "Software Dev",
//       company: "Google",
//     },
//     isSingle: false,
//     isAlive: true,
//     isGay: false,
//     location: {
//       city: "Port Jeff",
//       country: "USA",
//     },
//   })
//   .then(() => {
//     console.log("data is saved");
//   })
//   .catch((e) => {
//     console.log("This request failed", e);
//   });

// database.ref().update({
//   "job/company": "Amazon",
//   stressLevel: 9,
// });

// database
//   .ref("attributes")
//   .set({
//     height: 67,
//     weight: 159,
//   })
//   .then(() => {
//     console.log("U got data nigga");
//   })
//   .catch((e) => {
//     console.log("u suck nigga", e);
//   });

// // database
// //   .ref("isSingle")
// //   .remove()
// //   .then(() => {
// //     console.log("data removed");
// //   })
// //   .catch((e) => {
// //     console.log("Did not remove data", e);
// //   });

// // database.ref().update({
// //   name: "Mike",
// //   age: 29,
// //   job: "software dev",
// //   isSingle: null,
// // });
