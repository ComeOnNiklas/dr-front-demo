async function addFavouriteToDb(id: string) {
	return null;
}
async function removeFavouriteFromDb(id: string) {
	return null;
}

// Route is nested under /pokemon/[id] so we can access the id param
export async function POST(request: Request, context: { params: { id: string } }) {
	try {
		const pokemon = await request.json();

		await addFavouriteToDb(context.params.id);

		return new Response(JSON.stringify(pokemon));
	} catch (error) {
		return new Response(null, { status: 500 });
	}
}

export async function DELETE(request: Request, context: { params: { id: string } }) {
	try {
		const pokemon = await request.json();

		await removeFavouriteFromDb(context.params.id);

		return new Response(JSON.stringify(pokemon));
	} catch (error) {
		return new Response(null, { status: 500 });
	}
}
