import { Skeleton } from "@/components/skeleton";

export default function PokemonLoading() {
	return (
		<section className="flex w-full justify-evenly items-center">
			<Skeleton className="w-[300px] h-[300px] rounded-lg" />
			<div className="flex flex-col justify-center gap-4">
				<Skeleton className="w-[200px] h-6" />
				<Skeleton className="w-[210px] h-4" />
				<Skeleton className="w-[220px] h-4" />
				<Skeleton className="w-[230px] h-4" />
				<Skeleton className="w-[220px] h-4" />
				<Skeleton className="w-[210px] h-4" />
				<Skeleton className="w-[200px] h-4" />
			</div>
		</section>
	);
}
