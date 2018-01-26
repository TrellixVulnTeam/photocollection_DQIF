const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.addAlbum = functions.https.onRequest((req, res) => {
  	let uid = req.body.uid;
  	let albumKey = req.body.albumKey
  	let creatorName = req.body.creatorName;
  	let albumTitle = req.body.albumTitle
  	let albumDesc = req.body.albumDesc
  	let plan = parseInt(req.body.plan);
  	let event_date = +req.body.event_date;
  	let creatorId = req.body.creatorId;
  	 
  	admin.database().ref(`/users/${uid}/albums/${albumKey}`).set({
  		albumKey: albumKey,
  		albumDesc: albumDesc,
  		albumTitle: albumTitle,
  		creatorName: creatorName,
  		plan: plan,
  		event_date: event_date,
  		creatorId: creatorId
  	}).then(snapshot => {
    // Redirect with 303 SEE OTHER to the URL of the pushed object in the Firebase console.
    res.status(200).send(OK);
  	});
  	
});
