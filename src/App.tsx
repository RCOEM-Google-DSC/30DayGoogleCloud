import "./App.css";
import { useState } from "react";
import { LB } from "./components/LB";
import { Navbar } from "./components/Navbar";
import { Search } from "./components/Search";

function App() {
	const [search, setSearch] = useState("");
	return (
		<>
			<Navbar />
			<Search search={search} setSearch={setSearch} />
			<LB search={search} />
		</>
	);
}

export default App;
