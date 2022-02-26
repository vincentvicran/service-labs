interface ColumnType {
    Header: string;
    accessor: string;
}

export const COLUMNS: ColumnType = [
    {
        Header: 'Code',
        accessor: 'code',
    },
    {
        Header: 'Symbol',
        accessor: 'symbol',
    },
    {
        Header: 'Rate',
        accessor: 'rate',
    },
    {
        Header: 'Description',
        accessor: 'description',
    },
];
