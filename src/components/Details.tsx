import { updateTime } from "./leaderBoard.js";
export function Details() {
	return (
		<div className="flex flex-col border-4 rounded-md border-blue-400 p-4 mt-4 w-2/5 max-md:w-[92vw] justify-center items-center gap-4">
			<h2 className="text-primary text-center text-xl font-medium">
			Google Cloud Study Jams Leaderboard
			</h2>
			<div className="flex flex-col">
				<p className="text-center text-primary uppercase">Legend</p>
				<div className="flex max-md:flex-col justify-around">
					<div className="blue pl-4 text-primary max-md:border-b-[1px]">Both Tracks</div>
					<div className="green pl-4 text-primary">Single Track</div>
				</div>
				<span className="text-gray-400">Last Updated: {updateTime}</span>
			</div>
		</div>
	);
}
