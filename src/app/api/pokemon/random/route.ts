export async function GET() {
	// Fetch a random pokemon from the API
	const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${getRandomInt(1, 151)}`);
	const pokemon = await response.json();

	return new Response(JSON.stringify(pokemon));
}

function getRandomInt(min: number, max: number) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min) + min);
}
