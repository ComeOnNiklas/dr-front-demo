import { ChevronRight } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Dr Front NextJS Demo",
	description: "Simple NextJS demo created for the Dr Front presentations",
};

export default function Home() {
	return (
		<section className="py-10 flex flex-col gap-10 w-full max-w-5xl items-center prose dark:prose-invert prose-xl prose-zinc">
			<div className="relative flex place-items-center mb-20 before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
				<Image
					className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
					src="/next.svg"
					alt="Next.js Logo"
					width={280}
					height={100}
					priority
				/>
			</div>
			<h1 className="text-5xl font-bold">What is Next(JS) in React?</h1>
			<p className="text-zinc-300 text-lg">A presentation for Dr Front about the NextJS framework</p>

			<Link href="/background" className="flex items-center underline">
				Background <ChevronRight className="w-5 h-5" />
			</Link>
		</section>
	);
}
