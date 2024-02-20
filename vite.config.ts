import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		VitePWA({
			strategies: "injectManifest",
			srcDir: "src",
			filename: "sw.mjs",
			manifest: {
				short_name: "Fleetbooster",
				name: "Fleetbooster",
				icons: [
					{
						src: "/images/pwa-64x64.png",
						sizes: "64x64",
						type: "image/png",
					},
					{
						src: "/images/pwa-192x192.png",
						sizes: "192x192",
						type: "image/png",
					},
					{
						src: "/images/pwa-512x512.png",
						sizes: "512x512",
						type: "image/png",
						purpose: "any",
					},
					{
						src: "/images/maskable-icon-512x512.png",
						sizes: "512x512",
						type: "image/png",
						purpose: "maskable",
					},
				],
				start_url: ".",
				display: "standalone",
				theme_color: "#ffffff",
				background_color: "#ffffff",
			},

			// manifestFilename: "manifest.json",
			// strategies: "injectManifest",
			// filename: "firebase-messaging-sw.js",
			// srcDir: "src",
			// registerType: "autoUpdate",
		}),
		TanStackRouterVite(),
	],
});
