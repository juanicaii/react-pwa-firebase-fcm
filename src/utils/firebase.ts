import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
	apiKey: "AIzaSyD8DxBbd0r4PT5NVhyRLSAQEHnbPiwSUAw",
	authDomain: "fleetbooster-ed156.firebaseapp.com",
	projectId: "fleetbooster-ed156",
	storageBucket: "fleetbooster-ed156.appspot.com",
	messagingSenderId: "892677479449",
	appId: "1:892677479449:web:02e0c21e9ef8af71c05e88",
};

const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);

export const getFirebaseToken = () => {
	return getToken(messaging, {
		vapidKey:
			"BHxI_sCI8RRe6N2UPElMFB6GZlIkPgc9e-KzD3Ucs-9zaXDIfhjwWsqxfDttcURqpP3fU4U5EpK6jy0oE7_RdFA",
	})
		.then((currentToken) => {
			if (currentToken) {
				console.log("current token for client: ", currentToken);
				return currentToken;
				// Track the token -> client mapping, by sending to backend server
				// show on the UI that permission is secured
			}
			return null;
		})
		.catch((err) => {
			console.log("An error occurred while retrieving token. ", err);
			return null;
			// catch error while creating client token
		});
};

export const onMessageListener = () =>
	new Promise((resolve) => {
		onMessage(messaging, (payload) => {
			console.log("payload", payload);
			resolve(payload);
		});
	});
