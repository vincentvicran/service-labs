export interface Data {
    time: {
        updated: Date;
    };
    disclaimer: string;
    chartName: string;
    bpi: {
        USD: {
            code: sting;
            symbol: string;
            rate: string;
            description: string;
            rate_float: number;
        };
        GBP: {
            code: sting;
            symbol: string;
            rate: string;
            description: string;
            rate_float: number;
        };
        EUR: {
            code: sting;
            symbol: string;
            rate: string;
            description: string;
            rate_float: number;
        };
    };
}
