import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import iconLight from "@/../public/icons/light-icon.png";
import iconDark from "@/../public/icons/dark-icon.png";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: "Magnus Byrkjeland",
		description: "Magnus Byrkjeland · Developer",
		creator: "Magnus Byrkjeland",
		robots: "index, follow",
		keywords: "portfolio, website, byrkj",
		openGraph: {},
		icons: [
			{
				media: "(prefers-color-scheme: light)",
				url: iconDark.src,
				type: "image/png",
			},
			{
				media: "(prefers-color-scheme: dark)",
				url: iconLight.src,
				type: "image/png",
			},

			{
				url: "/icons/android-chrome-192x192.png",
				sizes: "192x192",
				type: "image/png",
			},
			{
				url: "/icons/android-chrome-512x512.png",
				sizes: "512x512",
				type: "image/png",
			},
		],
		appleWebApp: {
			capable: true,
			title: "Byrkj",
		},
	};
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
			<Analytics />
		</html>
	);
}
