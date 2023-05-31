import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function PokemonLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Link href="/pokemon" className="flex items-center">
				<ChevronLeft className="h-5 w-5" /> Back
			</Link>
			{children}
		</>
	);
}
