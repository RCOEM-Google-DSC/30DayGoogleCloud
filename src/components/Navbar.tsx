import { Switch } from "@/components/ui/switch";
import { useTheme } from "./theme-provider";
import logo from "/logo.svg";
import { useEffect } from "react";

export function Navbar() {
	const { theme, setTheme } = useTheme();
	const toggleTheme = () => (theme === "light" ? setTheme("dark") : setTheme("light"));

	useEffect(() => {
		const button = document.querySelector(".switch")!;
		const thumb = document.querySelector(".switch_thumb")!;
		button.setAttribute("data-state", theme === "dark" ? "checked" : "unchecked");
		thumb.setAttribute("data-state", theme === "dark" ? "checked" : "unchecked");
	}, [theme]);

	return (
		<nav className="sticky top-0 z-20 flex w-[100vw] select-none items-center justify-center gap-16 overflow-visible border-b-2 bg-background p-4 drop-shadow max-md:gap-0">
			<div className="flex items-center justify-center gap-4">
				<img src={logo} className="App-logo h-8" alt="logo" />
				<h3 className="text-xl font-medium uppercase tracking-wide text-secondary max-md:hidden">
					Google Cloud Study Jams
				</h3>
				<h3 className="text-xl font-medium uppercase tracking-wide text-secondary hidden max-md:block">
					Study Jams
				</h3>
			</div>
			<div className="flex w-2/3 justify-end gap-11 text-xl uppercase">
				<a
					className="group text-primary transition duration-300 max-md:hidden"
					href="https://events.withgoogle.com/cloud-studyjam/"
					target="_blank"
				>
					Home
					<span className="block h-0.5 max-w-0 bg-sky-400 transition-all duration-500 group-hover:max-w-full"></span>
				</a>
				<a className="group text-primary transition duration-300 max-md:hidden" href="#events">
					Leaderboard
					<span className="block h-0.5 max-w-0 bg-sky-400 transition-all duration-500 group-hover:max-w-full"></span>
				</a>
				<a className="group text-primary transition duration-300 max-md:hidden" href="#team">
					About
					<span className="block h-0.5 max-w-0 bg-sky-400 transition-all duration-500 group-hover:max-w-full"></span>
				</a>
				<Switch onClick={toggleTheme} />
			</div>
		</nav>
	);
}
