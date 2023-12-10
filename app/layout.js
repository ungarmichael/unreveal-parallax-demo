import { Inter } from "next/font/google";
import localfont from "next/font/local";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const ur = localfont({
	src: [
		{
			path: "../public/fonts/ur.otf",
		},
	],
	variable: "--font-ur",
});

export const metadata = {
	title: "unreveal-parallax-demo",
	description:
		"Parallax demonstration with lenis-scroll and gsap scrolltrigger.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={`${ur.variable}`}>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
