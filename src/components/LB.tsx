import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { leaderBoardData, updateTime } from "./leaderBoard.js";
import { DataTable } from "./DataTable.js";
import { columns } from "./columns.js";

export function LB({ search }: LBProps) {
	let lbData = leaderBoardData;

	if (search.length) {
		lbData = leaderBoardData.filter((lb) => lb.name.toLowerCase().includes(search.toLowerCase()));
	}

	const rank = (data: (typeof leaderBoardData)[0]) => {
		return leaderBoardData.findIndex((lb) => lb.name === data.name) + 1;
	};

	const className = (color: string) => `text-primary font-medium text-center ${color}`;
	const rows = lbData.map((r) => ({
		rank: rank(r),
		name: r.name,
		gccf: r.trackOne,
		gen: r.trackTwo,
	}))
	return (
		// <Table id="leaderboard" className="w-4/5 max-md:w-[92vw] my-4">
		// 	<TableCaption className="font-light">Last Updated: {updateTime}</TableCaption>
		// 	<TableHeader>
		// 		<TableRow>
		// 			<TableHead className="w-[2rem]">Rank</TableHead>
		// 			<TableHead>Name</TableHead>
		// 			<TableHead className="text-center">GCCF</TableHead>
		// 			<TableHead className="text-center">Gen AI</TableHead>
		// 		</TableRow>
		// 	</TableHeader>
		// 	<TableBody>
		// 		{lbData.map((lb) => (
		// 			<TableRow key={rank(lb)} className="max-md:h-12">
		// 				<TableCell className={className(lb.color)}>{rank(lb)}</TableCell>
		// 				<TableCell className="text-primary">{lb.name}</TableCell>
		// 				<TableCell className="text-primary text-center">{lb.trackOne}</TableCell>
		// 				<TableCell className="text-primary text-center">{lb.trackTwo}</TableCell>
		// 			</TableRow>
		// 		))}
		// 	</TableBody>
		// </Table>
		<div className="w-4/5 max-md:w-[92vw] my-4">
			<DataTable columns={columns} data={rows} />
		</div>
	);
}

interface LBProps {
	search: string;
}
