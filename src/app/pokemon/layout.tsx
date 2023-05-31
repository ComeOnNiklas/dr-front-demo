import { Metadata } from "next";
import Navigation from "../navigation";

export const metadata: Metadata = {
	title: "Pokemon - Dr Front NextJS Demo",
	description: "An informative list of information about the NextJS framework",
};

export default async function PokemonLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Navigation />
			<main className="p-24 max-w-5xl mx-auto mb-10">{children}</main>
		</>
	);
}
