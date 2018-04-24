import * as firebase from "firebase";

// Initialize Firebase
const config = {
	apiKey: "AIzaSyD1s3tLlt8UtcYlPoJL5D-DGz8rzra_FJg",
	authDomain: "todos-001.firebaseapp.com",
	databaseURL: "https://todos-001.firebaseio.com",
	projectId: "todos-001",
	storageBucket: "todos-001.appspot.com",
	messagingSenderId: "13757119658"
};
firebase.initializeApp(config);

export const database = firebase.database();
