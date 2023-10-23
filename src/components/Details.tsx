import { updateTime, leaderBoardData } from './leaderBoard.js';
export function Details() {
	const totalBlue = leaderBoardData.filter((i) => i.color === 'blue').length;
	const totalGreen = leaderBoardData.filter((i) => i.color === 'green').length;
	return (
		<div className="my-4 flex w-2/5 flex-col items-center justify-center gap-4 rounded-md border-4 border-blue-400 p-4 max-md:w-[92vw]">
			<h2 className="text-center text-xl font-medium text-primary">Google Cloud Study Jams Leaderboard</h2>
			<div className="flex flex-col">
				<p className="text-center uppercase text-primary">Legend</p>
				<div className="flex justify-around max-md:flex-col">
					<div className="blue flex h-8 items-center pl-4 text-primary max-md:border-b-[1px]">
						Both Tracks{' '}
						<span className="ml-1 flex w-5 items-center justify-center rounded-md bg-blue-300 px-1">{totalBlue}</span>
					</div>
					<div className="green flex h-8 items-center pl-4 text-primary">
						Single Track{' '}
						<span className="ml-1 flex w-5 items-center justify-center rounded-md bg-green-300 px-1">{totalGreen}</span>
					</div>
				</div>
				<span className="p-2 text-sm font-light text-gray-400 drop-shadow-md">Last Updated: {updateTime}</span>
			</div>
		</div>
	);
}
