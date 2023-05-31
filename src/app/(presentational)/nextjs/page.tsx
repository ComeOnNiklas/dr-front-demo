import { ChevronRight } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "About NextJS - Dr Front NextJS Demo",
	description: "An informative list of information about the NextJS framework",
};

export default function AboutNextPage() {
	return (
		<section className="flex flex-col gap-4 max-w-5xl w-full prose dark:prose-invert prose-xl prose-zinc">
			<h1>About NextJS</h1>
			<ul>
				<li>Popular, opinionated framework for building React applications</li>
				<ul>
					<li>
						What does it mean <i>opinionated</i> and why is it a good thing? <span className="text-3xl ml-2">🫑</span>
					</li>
					<li>
						Backend framework? <span className="text-3xl ml-2">🙀</span>
					</li>
					<li>
						It is recommended to adopt one the opinionated React frameworks such as Next or Remix because it provides
						some really great features and primitives that all apps eventually will need like routing and data fetching
						<br />
						<a href="https://twitter.com/acdlite/status/1617611126514266112?s=20" target="_blank">
							<blockquote className="twitter-tweet">
								<p lang="en" dir="ltr">
									If you use React, you should be using a React framework. If your existing app doesn't use a framework,
									you should incrementally migrate to one. If you're creating a new React project, you should use a
									framework from the beginning.
								</p>
								&mdash; Andrew Clark (@acdlite) - React Core Team
							</blockquote>
						</a>
						<br />
						Also see the official React documentation on{" "}
						<a
							href="https://react.dev/learn/start-a-new-react-project#building-with-a-full-featured-framework"
							target="_blank"
						>
							recommended frameworks
						</a>
					</li>
				</ul>
			</ul>
			<ul>
				<h3>Features that we will look at today:</h3>
				<li>
					File System Routing
					<ul>
						<li>Dynamic routes</li>
						<li>Nested pages and layouts</li>
						<li>Catch All-routes</li>
					</ul>
				</li>
				<li>
					The <code>Image</code> component
				</li>
				<li>Server-Side Rendering</li>
				<li>
					Static Site Generation
					<ul>
						<li>Incremental Static Regeneration</li>
					</ul>
				</li>
				<li>API Routes</li>
				<li>Metadata API</li>
				<li>Patched fetch 🌶🌶</li>
				<li>React Server Components</li>
			</ul>
			<ul>
				<h4>Honorable mentions that won't make it today:</h4>
				<li>Server Actions</li>
				<li>Edge runtime stuff</li>
				<li>Parellel Routes</li>
				<li>Font Optimization</li>
			</ul>

			<Link href="/pokemon" className="flex items-center underline">
				Let's go look at Pokémon <ChevronRight className="w-5 h-5" />
			</Link>
		</section>
	);
}
