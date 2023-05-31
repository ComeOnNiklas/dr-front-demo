import Navigation from "../navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Navigation />
			<main className="flex min-h-screen flex-col items-center justify-between p-24 bg-zinc-950 text-zinc-200">
				{children}
			</main>
		</>
	);
}
