function buyChoco(prices: number[], money: number): number {
    const n = prices.length; 

    for(let i = 0; i < n; i++){
        let min = i;
        for(let j = i + 1; j < n; j++){
            if(prices[j] < prices[min]) min = j;
        }; 

        if(min !== i) [prices[i], prices[min]] = [prices[min], prices[i]];
    }

    for(let i = 0; i < n; i++){
        for(let j = i + 1; j < n; j++){
            let calc = money - (prices[j] + prices[i]);
            if(calc >= 0) return calc;
        }
    }
    
    return money;
};