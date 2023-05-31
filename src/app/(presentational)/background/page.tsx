import { ChevronRight } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Background - Dr Front NextJS Demo",
	description: "Bulletpoint list of some notes for the presentation",
};

export default function Background() {
	return (
		<section className="flex flex-col gap-4 max-w-5xl w-full prose dark:prose-invert prose-xl prose-zinc">
			<h1>Background</h1>
			<ul>
				<li>New Sportsbook CMS as a part of the Arland project</li>
				<ul>
					<li>Customize the UI</li>
					<li>Sorting and ranking</li>
					<li>Control features</li>
				</ul>
				<li>CMS was not a part of the original estimation. Big project in itself</li>
				<li>We wanted something that we could keep building on-top of in the future</li>
				<li>Took the opportunity to set some of the groundwork for the frontend that we could use later</li>
				<li>
					<i>
						We gotta go fast <span className="text-4xl ml-2">🏎💭</span>
					</i>
				</li>
			</ul>

			<h3>We use:</h3>
			<ul>
				<li>NextJS</li>
				<li>React</li>
				<li>Typescript</li>
				<li>TailwindCSS</li>
				<li>RadixUI</li>
				<li>React Query (For now)</li>
			</ul>
			<a
				href="http://sth-k8s-gw.cleverdolphin.se/sportsbook-cms"
				target="_blank"
				className="flex items-center underline"
			>
				The Sportsbook CMS <ChevronRight className="w-5 h-5" />
			</a>
			<Link href="/nextjs" className="flex items-center underline">
				About NextJS <ChevronRight className="w-5 h-5" />
			</Link>
		</section>
	);
}
