import Image from "next/image";

type Pokemon = {
	id: string;
	order: string;
	name: string;
	stats: Array<{
		base_stat: number;
		effort: number;
		stat: {
			name: string;
			url: string;
		};
	}>;
};

async function getRandomPokemon(): Promise<Pokemon> {
	const response = await fetch("http://localhost:3003/api/pokemon/random", {
		// cache: "no-store",
	});
	const pokemon = await response.json();
	return pokemon;
}

export default async function RandomPokemonPage() {
	const pokemon = await getRandomPokemon();

	return (
		<section className="flex w-full justify-evenly items-center">
			<Image
				src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
				width="300"
				height="300"
				alt="Pokemon"
				priority
				quality={100}
			/>
			<div className="flex flex-col justify-center">
				<h1 className="font-bold text-2xl capitalize">
					#{pokemon.order} - {pokemon.name}
				</h1>
				<ul>
					{pokemon.stats.map((stat) => {
						return (
							<li key={stat.stat.name} className="flex">
								<p className="capitalize mr-2">{stat.stat.name}: </p>
								<p className="font-bold">{stat.base_stat}</p>
							</li>
						);
					})}
				</ul>
			</div>
		</section>
	);
}
