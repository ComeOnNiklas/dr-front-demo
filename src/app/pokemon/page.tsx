import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Pokemon = {
	name: string;
	url: string;
};

async function getPokemons(): Promise<Array<Pokemon>> {
	const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
	const data = await response.json();
	return data.results;
}

export default async function PokemonsPage() {
	const pokemons = await getPokemons();

	return (
		<>
			<Link href="/pokemon/random" className="flex items-center rounded-md py-2 px-4 bg-zinc-800 w-fit">
				Go to a Random Pokemon <ChevronRight className="h-5 w-5" />
			</Link>
			<section className="auto-rows-auto grid grid-cols-3">
				{pokemons.map((pokemon) => {
					const pokemonId = pokemon.url.split("/")[6];
					return (
						<Link
							href={`/pokemon/${pokemonId}`}
							key={pokemon.name}
							className="flex flex-col items-center justify-center"
						>
							<Image
								src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`}
								alt="Pokemon"
								width="200"
								height="200"
								loading="lazy"
								quality={75}
							/>
							<p className="capitalize">{pokemon.name}</p>
						</Link>
					);
				})}
			</section>
		</>
	);
}
