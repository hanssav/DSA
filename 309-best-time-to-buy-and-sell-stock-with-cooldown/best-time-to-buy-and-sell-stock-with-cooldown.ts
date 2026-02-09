function maxProfit(prices: number[]): number {
    if(prices.length <= 1) return 0;

    let hold = -Infinity; 
    let sold = 0;
    let rest = 0; 

    for(let price of prices){
        let prevSold = sold; 

        hold = Math.max(hold, rest - price); 
        sold = hold + price; 
        rest = Math.max(rest, prevSold); 
    }

    return Math.max(sold, rest)
};