import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function PokemonLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Link href="/pokemon" className="flex items-center rounded-md py-2 px-4 bg-zinc-800 w-fit">
				<ChevronLeft className="h-5 w-5" /> Back
			</Link>
			{children}
		</>
	);
}
