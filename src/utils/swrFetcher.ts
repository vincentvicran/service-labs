export const fetcher = async () => {
    const res = await fetch(
        'https://api.coindesk.com/v1/bpi/currentprice.json'
    );
    const data = await res.json();

    return data;
};

export const swrOptions = {
    refreshInterval: 10000,
};
