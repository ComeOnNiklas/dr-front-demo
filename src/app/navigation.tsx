"use client";

import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

function NavigationItem({ children, href, isActive }: { children: React.ReactNode; href: string; isActive: boolean }) {
	return (
		<li>
			<Link href={href}>
				<h2
					className={clsx(
						"rounded-md border border-transparent transition-colors text-lg font-semibold py-2 px-4 leading-none",
						isActive ? "text-zinc-100 bg-indigo-600" : "text-zinc-400"
					)}
				>
					{children}
				</h2>
			</Link>
		</li>
	);
}

export default function Navigation() {
	const pathname = usePathname();

	return (
		<nav className="px-6 py-3 bg-zinc-950 backdrop-blur-md">
			<ul className="flex items-center gap-6 w-full h-full px-6 py-3">
				<NavigationItem isActive={pathname === "/"} href="/">
					Start
				</NavigationItem>
				<NavigationItem isActive={pathname === "/background"} href="/background">
					Background
				</NavigationItem>
				<NavigationItem isActive={pathname === "/nextjs"} href="/nextjs">
					About NextJS
				</NavigationItem>
				<NavigationItem isActive={pathname.includes("pokemon")} href="/pokemon">
					Pokémon
				</NavigationItem>
				<NavigationItem isActive={pathname === "/the-end"} href="/the-end">
					The End
				</NavigationItem>
			</ul>
		</nav>
	);
}
