import "./App.css";
import { useState } from "react";
import { LB } from "./components/LB";
import { Navbar } from "./components/Navbar";
import { Search } from "./components/Search";
import { Details } from "./components/Details";

function App() {
	const [search, setSearch] = useState("");
	return (
		<>
			<Navbar />
			<Details />
			<Search search={search} setSearch={setSearch} />
			<LB search={search} />
		</>
	);
}

export default App;
