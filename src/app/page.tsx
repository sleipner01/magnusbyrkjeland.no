import GithubIcon from "@/assets/github.svg";
import LinkedInIcon from "@/assets/linkedin.svg";
import Link from "next/link";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-center p-8 sm:p-24">
			<div
				className="max-w-lg animate-rollOutLeftAndDown absolute"
				id="typewriter"
			>
				<h1 className="text-4xl font-bold overflow-hidden border-r-4 border-black dark:border-white whitespace-nowrap animate-typewriter inline-block">
					Magnus Byrkjeland<span className="animate-blink">|</span>
				</h1>
				<div className="overflow-hidden h-6 relative" id="loading">
					<p className="absolute inset-0 animate-slideInBottomOutTop opacity-0">
						Hold on...
					</p>
					<p className="absolute inset-0 opacity-0 animate-slideInBottomDelayed">
						Any second now...
					</p>
				</div>
			</div>
			<div
				className="max-w-lg animate-rollInLeftAndUp opacity-0 absolute px-4"
				id="main-content"
			>
				<h2 className="text-4xl font-bold">👋🏽 Hello there!</h2>
				<div className="mt-4">
					<p>
						I&apos;ll be brutally honest. My Github and Linkedin will always be
						more informative than this website.
					</p>
					<p>If you want to stalk me, have a look below:</p>
					<div className="flex gap-4 mt-6 justify-center sm:justify-start">
						<Link
							href="https://github.magnusbyrkjeland.no"
							target="_blank"
							className="fill-[currentColor] hover:fill-[#8945C5] transition-colors duration-100 ease-out"
							aria-label="Github"
						>
							<GithubIcon className="w-12 h-12" />
						</Link>
						<Link
							href="https://linkedin.magnusbyrkjeland.no"
							target="_blank"
							className="fill-[currentColor] hover:fill-[#0072b1] transition-colors duration-100 ease-out"
							aria-label="LinkedIn"
						>
							<LinkedInIcon className="w-12 h-12" />
						</Link>
					</div>
				</div>
			</div>
			{/* Wrapping div to prevent overflow */}
			<div className="absolute w-full h-full overflow-hidden -z-10">
				<div
					className="absolute w-[80%] h-[80%] opacity-0 animate-fadeIn bg-[url('/images/light-icon.svg')] dark:bg-[url('/images/dark-icon.svg')] bg-no-repeat bg-[right_bottom] bg-contain rotate-6 -right-10 -bottom-16"
					id="coffee-motive"
				></div>
			</div>
		</main>
	);
}
