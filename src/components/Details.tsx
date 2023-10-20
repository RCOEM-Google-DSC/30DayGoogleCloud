import { updateTime } from "./leaderBoard.js";
export function Details() {
	return (
		<div className="flex flex-col border-4 rounded-md border-blue-400 p-4 my-4 w-2/5 max-md:w-[92vw] justify-center items-center gap-4">
			<h2 className="text-primary text-center text-xl font-medium">
			Google Cloud Study Jams Leaderboard
			</h2>
			<div className="flex flex-col">
				<p className="text-center text-primary uppercase">Legend</p>
				<div className="flex max-md:flex-col justify-around">
					<div className="blue pl-4 h-8 text-primary max-md:border-b-[1px] flex items-center">Both Tracks</div>
					<div className="green pl-4 h-8 text-primary flex items-center">Single Track</div>
				</div>
				<span className="text-gray-400 text-sm drop-shadow-md p-2 font-light">Last Updated: {updateTime}</span>
			</div>
		</div>
	);
}
