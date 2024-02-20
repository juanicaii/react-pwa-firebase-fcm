import { precacheAndRoute } from "workbox-precaching";
import { cleanupOutdatedCaches } from "workbox-precaching";
import { clientsClaim } from "workbox-core";

cleanupOutdatedCaches();

precacheAndRoute(self.__WB_MANIFEST);
self.skipWaiting();
clientsClaim();
if ("serviceWorker" in navigator) {
	window.addEventListener("load", () => {
		navigator.serviceWorker
			.register("firebase-messaging-sw.js", {
				scope: "/",
			})
			.then((registration) => {
				console.log("Registration successful, scope is:", registration.scope);
				registration.pushManager
					.subscribe({
						userVisibleOnly: true,
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
	});
}
