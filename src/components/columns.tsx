import { ColumnDef } from '@tanstack/react-table';

export type Columns = {
	rank: number;
	name: string;
	gccf: number;
	gen: number;
};

export const columns: ColumnDef<Columns>[] = [
	{
		accessorKey: 'rank',
		header: () => <div className="w-[2rem] text-center">Rank</div>,
		cell: ({ getValue, table }) => {
			const data = table.getRow(String(getValue<number>() - 1)).original;
			const color = data.gccf === 8 && data.gen === 1 ? 'blue' : data.gccf === 8 || data.gen === 1 ? 'green' : 'black';

			const className = `w-[2rem] flex items-center h-8 text-center text-primary font-medium ${color} pl-4`;
			return <div className={className}>{getValue<string>()}</div>;
		},
	},
	{
		accessorKey: 'name',
		header: 'Name',
		cell: ({ getValue }) => <div className="text-primary">{getValue<string>()}</div>,
	},
	{
		accessorKey: 'gccf',
		header: () => <div className="text-center">GCCF</div>,
		cell: ({ getValue }) => <div className="text-center text-primary">{getValue<string>()}</div>,
	},
	{
		accessorKey: 'gen',
		header: () => <div className="text-center">Gen AI</div>,
		cell: ({ getValue }) => <div className="text-center text-primary">{getValue<string>()}</div>,
	},
];
