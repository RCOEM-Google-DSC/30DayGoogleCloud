import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { leaderBoardData } from "./leaderBoard.js";

export function LB({ search }: LBProps) {
	let lbData = leaderBoardData;
	const color = (col: string) => {
		switch (col) {
			case "black":
				return "text-primary";
			case "blue":
				return "text-blue-500";
			case "green":
				return "text-green-500";
		}
	};

	if (search.length) {
		lbData = leaderBoardData.filter((lb) => lb.name.toLowerCase().includes(search.toLowerCase()));
	}

	const rank = (data: (typeof leaderBoardData)[0]) => {
		return leaderBoardData.findIndex((lb) => lb.name === data.name) + 1;
	};

	return (
		<Table id="leaderboard" className="w-4/5 max-md:w-[92vw]">
			<TableCaption></TableCaption>
			<TableHeader>
				<TableRow>
					<TableHead className="w-[2rem]">Rank</TableHead>
					<TableHead>Name</TableHead>
					<TableHead className="text-center">Track 1</TableHead>
					<TableHead className="text-center">Track 2</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{lbData.map((lb) => (
					<TableRow key={rank(lb)}>
						<TableCell className="text-primary font-medium text-center blue">{rank(lb)}</TableCell>
						<TableCell className={"text-primary" ?? color(lb.color)}>{lb.name}</TableCell>
						<TableCell className="text-primary text-center">{lb.trackOne}</TableCell>
						<TableCell className="text-primary text-center">{lb.trackTwo}</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
}

interface LBProps {
	search: string;
}
