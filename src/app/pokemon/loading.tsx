import { Skeleton } from "@/components/skeleton";

export default function PokemonPageLoading() {
	<section className="auto-rows-auto grid grid-cols-5">
		{Array.from({ length: 151 }).map((_, index) => {
			return <Skeleton key={index} className="h-[150px] w-[150px]" />;
		})}
	</section>;
}
