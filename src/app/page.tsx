import GithubIcon from "@/assets/github.svg";
import LinkedInIcon from "@/assets/linkedin.svg";
import Link from "next/link";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-center p-8 sm:p-24">
			<div className="max-w-lg animate-rollOutLeftAndDown absolute" id="typewriter">
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
				className="max-w-lg animate-rollInLeftAndUp opacity-0 absolute"
				id="main-content"
			>
				<h2 className="text-3xl font-bold">Information coming...</h2>
				<div className="mt-4">
					<p>Check this out in the meantime:</p>
					<div className="flex gap-4 mt-2">
						<Link
							href="https://github.magnusbyrkjeland.no"
							target="_blank"
							className="fill-[currentColor] hover:fill-[#8945C5]"
						>
							<GithubIcon className="w-12 h-12" />
						</Link>
						<Link
							href="https://linkedin.magnusbyrkjeland.no"
							target="_blank"
							className="fill-[currentColor] hover:fill-[#0072b1]"
						>
							<LinkedInIcon className="w-12 h-12" />
						</Link>
					</div>
				</div>
			</div>
		</main>
	);
}
