import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import iconLight from "@/../public/images/light-icon.png";
import iconDark from "@/../public/images/dark-icon.png";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: "Magnus Byrkjeland",
		description: "Magnus Byrkjeland - Software Developer",
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
		],
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
