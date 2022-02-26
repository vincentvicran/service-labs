/* eslint-disable react/jsx-key */
import React, {
    MouseEventHandler,
    useState,
    useEffect,
    useCallback,
} from 'react';
import { Props, Coin } from 'utils/typings';
import genericSearch from 'utils/genericSearch';

const Rates = ({ data }: Props) => {
    const [coins, setCoins] = useState([
        data.bpi.USD,
        data.bpi.GBP,
        data.bpi.EUR,
    ]);

    useEffect(() => {
        setCoins([data.bpi.USD, data.bpi.GBP, data.bpi.EUR]);
    }, [data.bpi.USD, data.bpi.GBP, data.bpi.EUR]);

    console.log(coins);

    const queryProperties = ['code', 'symbol', 'rate', 'description'];

    const [query, setQuery] = useState('');

    const [showModal, setShowModal] = useState(false);

    const headers = [
        { key: 'code', label: 'Code' },
        { key: 'symbol', label: 'Symbol' },
        { key: 'rate', label: 'Rate' },
        { key: 'description', label: 'Description' },
    ];

    type Data = typeof coins;

    type SortKeys = keyof Data[0];

    type SortOrder = 'ascn' | 'desc';

    const [sortKey, setSortKey] = useState<SortKeys>('code');
    const [sortOrder, setSortOrder] = useState<SortOrder>('ascn');

    function sortData({
        tableData,
        sortKey,
        reverse,
    }: {
        tableData: Data;
        sortKey: SortKeys;
        reverse: boolean;
    }) {
        if (!sortKey) return tableData;

        const sortedData = coins.sort((a, b) => {
            return a[sortKey] > b[sortKey] ? 1 : -1;
        });

        if (reverse) {
            return sortedData.reverse();
        }

        return sortedData;
    }

    function SortButton({
        sortOrder,
        columnKey,
        sortKey,
        onClick,
    }: {
        sortOrder: SortOrder;
        columnKey: SortKeys;
        sortKey: SortKeys;
        onClick: MouseEventHandler<HTMLButtonElement>;
    }) {
        return (
            <button
                onClick={onClick}
                className={`${
                    sortKey === columnKey && sortOrder === 'desc'
                        ? 'sort-button sort-reverse'
                        : 'sort-button'
                }`}
            >
                ▲
            </button>
        );
    }
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

    return (
        <div>
            <div>
                <input
                    placeholder="Search..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
            </div>
            <div className=" bg-white ml-2   shadow-sm w-8/12 border rounded-xl border-gray-100">
                <div className="border-b p-3 border-gray-100">
                    <p className="font-semibold  ">Rates</p>
                </div>
                <table>
                    <thead>
                        <tr>
                            {headers.map((row) => {
                                return (
                                    <td key={row.key}>
                                        {row.label}{' '}
                                        <SortButton
                                            columnKey={row.key}
                                            onClick={() => changeSort(row.key)}
                                            {...{
                                                sortOrder,
                                                sortKey,
                                            }}
                                        />
                                    </td>
                                );
                            })}
                        </tr>
                    </thead>

                    <tbody>
                        {sortedData()
                            .filter((searchCoin) =>
                                genericSearch(
                                    searchCoin,
                                    queryProperties,
                                    query,
                                    false
                                )
                            )
                            .map((coin) => {
                                return (
                                    <tr key={coin.code}>
                                        <td>{coin.code}</td>
                                        <td>{coin.symbol}</td>
                                        <td>{coin.rate}</td>
                                        <td>{coin.description}</td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Rates;
