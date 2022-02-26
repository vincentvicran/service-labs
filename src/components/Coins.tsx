import React, { useState, useCallback } from 'react';
import { Coin } from 'utils/typings';

type SortKeys = keyof Coin;

type SortOrder = 'ascn' | 'desc';

function sortData({
    tableData,
    sortKey,
    reverse,
}: {
    tableData: Coin;
    sortKey: SortKeys;
    reverse: boolean;
}) {
    if (!sortKey) return tableData;

    const sortedData = data.sort((a, b) => {
        return a[sortKey] > b[sortKey] ? 1 : -1;
    });

    if (reverse) {
        return sortedData.reverse();
    }

    return sortedData;
}

const Coins = ({ code, symbol, rate, description, rate_float }: Coin) => {
    const [sortKey, setSortKey] = useState<SortKeys>('code');
    const [sortOrder, setSortOrder] = useState<SortOrder>('ascn');

    const headers = [
        { key: 'code', label: 'Code' },
        { key: 'symbol', label: 'Symbol' },
        { key: 'rate', label: 'Rate' },
        { key: 'description', label: 'Description' },
    ];

    const sortedData = useCallback(
        () =>
            sortData({
                tableData: data,
                sortKey,
                reverse: sortOrder === 'desc',
            }),
        [data, sortKey, sortOrder]
    );

    function changeSort(key: SortKeys) {
        setSortOrder(sortOrder === 'ascn' ? 'desc' : 'ascn');

        setSortKey(key);
    }

    const headers = {
        code: 'Code',
        symbol: 'Symbol',
        rate: 'Rate',
        description: 'Description',
    };

    const handleSort = (obj: Coin) => {
        coins.sort((a, b) =>
            a[obj.key] > b[obj.key] ? obj.dir : -1 * obj.dir
        );
    };

    return (
        <table>
            <div>
                {coins.map((coin: Coin) => {
                    return <div key={coin.code}></div>;
                })}
                <Table
                    headers={headers}
                    content={coins}
                    breakpoint={768}
                    pageSize={4}
                    onSort={(obj: Coin) => {
                        handleSort(obj);
                    }}
                    className="my-table"
                    paginationClass="my-pagination"
                />
            </div>
        </table>
    );
};

export default Coins;
