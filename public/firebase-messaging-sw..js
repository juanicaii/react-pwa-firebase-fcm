// Scripts for firebase and firebase messaging
importScripts(
	"https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js",
);
importScripts(
	"https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js",
);

if ("serviceWorker" in navigator) {
	navigator.serviceWorker
		.register("firebase-messaging-sw.js")
		.then((registration) => {
			console.log("Registration successful, scope is:", registration.scope);
			registration.pushManager
				.subscribe({
					userVisibleOnly: true,
					applicationServerKey:
						"BHxI_sCI8RRe6N2UPElMFB6GZlIkPgc9e-KzD3Ucs-9zaXDIfhjwWsqxfDttcURqpP3fU4U5EpK6jy0oE7_RdFA",
				})
				.then((subscription) => {
					console.log("Endpoint URL:", subscription.endpoint);
				})
				.catch((err) => {
					console.log("Subscription failed, error:", err);
				});
		})
		.catch((err) => {
			console.log("Service worker registration failed, error:", err);
		});
}

const firebaseConfig = {
	apiKey: "AIzaSyD8DxBbd0r4PT5NVhyRLSAQEHnbPiwSUAw",
	authDomain: "fleetbooster-ed156.firebaseapp.com",
	projectId: "fleetbooster-ed156",
	storageBucket: "fleetbooster-ed156.appspot.com",
	messagingSenderId: "892677479449",
	appId: "1:892677479449:web:02e0c21e9ef8af71c05e88",
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
	console.log("Received background message ", payload);

	const notificationTitle = payload.notification.title;
	const notificationOptions = {
		body: payload.notification.body,
		icon: "/images/pwa-64x64.pngs.png",
	};

	self.registration.showNotification(notificationTitle, notificationOptions);
});
