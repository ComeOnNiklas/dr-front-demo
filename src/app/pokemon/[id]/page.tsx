import { Metadata, ResolvingMetadata } from "next";
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

type Props = {
	params: { id: string };
};

async function getPokemon(id: string): Promise<Pokemon> {
	// Result of the fetch request is cached
	const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
	const data = await response.json();
	return data;
}

export async function generateMetadata({ params }: Props): Promise<Metadata | ResolvingMetadata> {
	const pokemonId = params.id;
	// Fetch the pokemon (again) but the request is deduplicated and cached
	const pokemon = await getPokemon(pokemonId);

	return {
		title: `${pokemon.name} | Pokemon Demo`,
		description: `This is the page for ${pokemon.name}`,
		openGraph: {
			images: [`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${params.id}.png`],
		},
	};
}

// Creates the static pages for the pokemon at build time (SSG) - useful for a blog or a product page
// export async function generateStaticParams() {
// 	const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
// 	const pokemon = (await response.json().then((json) => json.results)) as Array<Pokemon>;

// 	return pokemon.map((pokemon) => ({
// 		id: pokemon.name,
// 	}));
// }

// export const revalidate = 60; // revalidate this segment every 60 seconds - you have now enabled ISR

export default async function PokemonPage({ params }: Props) {
	const pokemon = await getPokemon(params.id);

	return (
		<section className="flex w-full justify-evenly items-center">
			<Image
				// srcset is generated automatically
				src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${params.id}.png`}
				width="300"
				height="300"
				alt="Pokemon"
				priority
				quality={100}
				// loader={imageLoader}
				// fill={true}
				// blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFhAJ/wr+3HwAAAABJRU5ErkJggg=="
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
