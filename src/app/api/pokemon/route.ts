// No time to implement an actual database, so we'll just return an empty array
async function getPokemonFromDb() {
	return [];
}

export async function GET() {
	try {
		const pokemon = await getPokemonFromDb(); // Call to ORM or db service
		return new Response(JSON.stringify(pokemon));
	} catch (error) {
		return new Response(null, { status: 500 });
	}
}
